// Importer le CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importer le bundle JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    // Utiliser un fragment pour envelopper le contenu JSX
    <>
      {/* Router pour permettre la navigation dans l'application */}
      <Router>
        {/* Le composant AppRoutes contient les routes définies */}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
