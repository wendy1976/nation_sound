import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createCanvas } from 'canvas';
import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import logoImage from './assets/imagesEtLogo/images/logo1.png';
import Image from './assets/imagesEtLogo/images/pass.jpg';

const Billetterie = () => {
  const [passes, setPasses] = useState([]);
  const [panier, setPanier] = useState({});
  const [message, setMessage] = useState('');
  const [afficherPanier, setAfficherPanier] = useState(false);
  const [panierValide, setPanierValide] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = new URL('https://promptia.fr/wp-json/wc/v3/products?_embed');
      url.searchParams.append('consumer_key', 'ck_e2c7c141b576494392f0d84d83daa63d792b71ff');
      url.searchParams.append('consumer_secret', 'cs_b5f92310248c73aaf7a70782cbb32ed19b761c0e');
      url.searchParams.append('per_page', 100);
      url.searchParams.append('page', 1);

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data) {
          const passes = data.filter(product => product.name.includes('PASS'));
          setPasses(passes);
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchData();
  }, []);

  const ajouterAuPanier = (pass) => {
    setPanier((prevPanier) => {
      return {
        ...prevPanier,
        [pass.name]: {
          ...pass,
          quantite: (prevPanier[pass.name]?.quantite || 0) + 1,
        },
      };
    });

    setMessage(`${pass.name} a été ajouté au panier`);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const togglePanier = () => {
    setAfficherPanier(!afficherPanier);
  };

  const supprimerDuPanier = (pass) => {
    setPanier((prevPanier) => {
      const newPanier = { ...prevPanier };
      const titre = pass.name;

      newPanier[titre] = {
        ...pass,
        quantite: (newPanier[titre]?.quantite ?? 0) - 1,
      };

      if (newPanier[titre].quantite <= 0) {
        delete newPanier[titre];
        setMessage(`${pass.name} a été supprimé du panier`);
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }

      return newPanier;
    });
  };

  const reinitialiserPanier = () => {
    setPanier({});
  };

  const calculerTotal = () => {
    return Object.values(panier).reduce((total, item) => total + item.price * item.quantite, 0);
  };

  const fermerPanier = () => {
    setAfficherPanier(false);
  };

  const validerPanier = () => {
    setPanierValide(true);
    genererBilletPDF(panier);
  };

  const genererBilletPDF = (panier) => {
    const pdf = new jsPDF();
  
    /// Déterminez les types de passes distincts dans le panier
  const typesDePassDistincts = [...new Set(Object.values(panier).map(item => item.name))];

  // Utilisez les types de passes distincts pour le titre
  const titre = `Festival de Musique Nation Sound - Billet(s) ${typesDePassDistincts.join(', ')}`;
  
  pdf.setFillColor(255, 223, 186);
  pdf.rect(10, 10, 190, 40, 'F');

  pdf.setFontSize(18);
  pdf.setTextColor(255, 74, 147);
  pdf.addImage(logoImage, 'PNG', 10, 10, 190, 40);
  // Utilisez la fonction splitTextToSize pour diviser le texte en plusieurs lignes
  const lines = pdf.splitTextToSize(titre, 170); // 170 est la largeur maximale avant de passer à une nouvelle ligne
  pdf.text(lines, 20, 60); // Utilisez la variable lines ici
  pdf.line(10, 50, 200, 50);

  let yPosition = 80;

  Object.values(panier).forEach((item) => {
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${item.name} - Quantité: ${item.quantite}`, 20, yPosition);

    pdf.setFontSize(10);
    pdf.text(`Prix unitaire: ${item.price} €`, 20, yPosition + 10);
    pdf.text(`Total: ${item.price * item.quantite} €`, 20, yPosition + 20);

    yPosition += 40;
  });

  pdf.setFillColor(100, 190, 139);
  pdf.rect(10, yPosition, 190, 20, 'F');

  pdf.setFontSize(12);
  pdf.setTextColor(255, 74, 147);
  pdf.text(`Total: ${calculerTotal()} €`, 20, yPosition + 10);

  // Générez un code-barres fictif (utilisez une chaîne unique, comme la date du festival)
  const codeBarreData = '2024-06-21'; // Utilisez une valeur pertinente à votre cas

  // Créez un canvas pour le code-barres
  const canvas = createCanvas();
  JsBarcode(canvas, codeBarreData, {
    format: 'CODE128',
    displayValue: false,
    height: 30,
  });

  // Convertissez le canvas en URL de données
  const dataUrl = canvas.toDataURL();

  // Ajoutez l'image du code-barres au PDF
  pdf.addImage(dataUrl, 'PNG', 150, yPosition + 20, 50, 20);

  pdf.save('billet_pass.pdf');
};
  
  

  return (
    <Layout>
      <div className="navbar">
        <button className="panier-button" onClick={togglePanier}>
          <FontAwesomeIcon icon={faShoppingCart} /> Panier
        </button>
      </div>

      {afficherPanier && (
        <div>
          <div className="overlay" onClick={fermerPanier}></div>
          <div className="panier">
            {panierValide ? (
              <h2 className='pink'>Votre panier a bien été validé!</h2>
            ) : (
              <>
                <h2>Panier</h2>
                <ul>
                  {Object.values(panier).map((item) => (
                    item.quantite > 0 && (
                      <li key={item.id}>
                        {item.name} - Quantité: {item.quantite} - Prix: {item.price * item.quantite} € TTC
                        <button onClick={() => supprimerDuPanier(item)}>Supprimer</button>
                      </li>
                    )
                  ))}
                </ul>
                <p>Total: {calculerTotal()} €</p>
                <button onClick={reinitialiserPanier}>Réinitialiser le panier</button>
                <button onClick={fermerPanier}>Fermer le panier</button>
                <button onClick={validerPanier}>Valider le panier</button>
              </>
            )}
          </div>
        </div>
      )}

      {message && (
        <div className="popup">
          <p className='pink'>{message}</p>
        </div>
      )}

      <div className="container">
        <h1 className="text-center pink mb-0 mt-3 pt-0 pb-5">Billetterie</h1>
        {passes.map((pass) => (
          <div key={pass.id} className="row border mb-4 p-3 bgYellow">
            <div className="col-md-3">
              <img src={Image} alt="" className="img-fluid" />
            </div>
            <div className="col-md-9">
              <h3 className='pink'>{pass.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: pass.description }}></p>
              <p>Prix: {pass.price} €</p>
              <button onClick={() => ajouterAuPanier(pass)}>Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Billetterie;

 