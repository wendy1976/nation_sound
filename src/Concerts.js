import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//Import de mes composants
import Footer from './Footer';
import Header from './Header';

import ListeDeProduits from './ListeDeProduits';




//Appels de mes composants pour ma page boutique
function Concerts() {
  return (
    <div>      
      <Header />     
        <h1 className="text-center pink mb-0 mt-3 pt-0 pb-5 boutique">LES CONCERTS & LA PROGRAMMATION</h1>  
        <ListeDeProduits />
      <Footer />
    </div>
  );
}

export default Concerts;
