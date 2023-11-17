import React from 'react';
import { Link } from 'react-router-dom';

// Importation de toutes mes images de produits
import image14 from "./assets/imagesEtLogo/images/Aline_Garner.jpg";
import image4 from "./assets/imagesEtLogo/images/Celtic_Breeze.jpg";
import image6 from "./assets/imagesEtLogo/images/Chloé_Deschamps.jpg";
import image10 from "./assets/imagesEtLogo/images/DJ_ElectroFlow.jpg";
import image2 from "./assets/imagesEtLogo/images/Dark_Chords.jpg";
import image3 from "./assets/imagesEtLogo/images/Echoes_of_Zion.jpg";
import image9 from "./assets/imagesEtLogo/images/Guns_and_Glory.jpg";
import image1 from "./assets/imagesEtLogo/images/Joyful_Notes.jpg";
import image15 from "./assets/imagesEtLogo/images/Laurent_Miles.jpg";
import image11 from "./assets/imagesEtLogo/images/Léo_Kingston.jpg";
import image8 from "./assets/imagesEtLogo/images/Mythical_Storm.jpg";
import image5 from "./assets/imagesEtLogo/images/Neon_Groove.jpg";
import image12 from "./assets/imagesEtLogo/images/Robby_Barlow_&_Lou.jpg";
import image7 from "./assets/imagesEtLogo/images/Théo_Sunshine.jpg";
import image13 from "./assets/imagesEtLogo/images/Titanium.jpg";


function ArtistCard(props) {
    let imageSrc = ''; // Initialisation de la variable imageSrc

    // Gérez l'image en fonction du nom de l'artiste
    switch (props.name) {
        case 'Joyful Notes':
            imageSrc = image1;
            break;
        case 'Dark Chords':
            imageSrc = image2;
            break;
        case 'Echoes of Zion':
            imageSrc = image3;
            break;
        case 'Celtic Breeze':
            imageSrc = image4;
            break;
        case 'Neon Groove':
            imageSrc = image5;
            break;
        case 'Chloé Deschamps':
            imageSrc = image6;
            break;
        case 'Théo Sunshine':
            imageSrc = image7;
            break;
        case 'Mythical Storm':
            imageSrc = image8;
            break;
        case 'Guns and Glory':
            imageSrc = image9;
            break;
        case 'DJ ElectroFlow':
            imageSrc = image10;
            break;
        case 'Léo Kingston':
            imageSrc = image11;
            break;
        case 'Robby Barlow & Lou':
            imageSrc = image12;
            break;
        case 'Titanium':
            imageSrc = image13;
            break;
        case 'Aline Garner':
            imageSrc = image14;
            break;
        case 'Laurent Miles':
            imageSrc = image15;
            break;
        // Ajoutez d'autres cas pour d'autres artistes avec leurs images correspondantes
        default:
            // Vous pouvez définir une image par défaut au cas où l'artiste n'est pas spécifié
            // imageSrc = 'chemin_de_votre_image_par_defaut.jpg';
            break;
    }

    
    return (
        <div className="artist-card bgWhite" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
            <div className="row">
                <div className="col-12 col-md-5">
                    <img
                        src={imageSrc} // Utilisation de la variable imageSrc au lieu de props.image
                        alt={props.name}
                        className="img-fluid" // Classe Bootstrap pour rendre l'image réactive
                    />
                </div>
                <div className="col-12 col-md-7">
                    <h3>{props.name}</h3>
                    <p>Date: {props.dateConcert}</p>
                    <p>Scène: {props.scene}</p>
                    <Link to={"/artistPage"} style={{ textDecoration: 'none' }}>
                        <button>Voir plus <span style={{ fontWeight: 'bold', color: 'red' }}>+</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ArtistCard;