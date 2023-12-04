import { Route, Routes } from 'react-router-dom';
import Accueil from './Accueil';

import Billetterie from './Billetterie';
import Concerts from './Concerts';
import ContactForm from './ContactForm';
import Faq from './Faq';
import Infos from './Infos';
import LegalNotice from './LegalNotice';
import MyMap from './MyMap';
import Newsletter from './Newsletter';
import PageProduit from './PageProduit';
import Partners from './Partners';




function AppRoutes() {
  return (
   
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/concerts" element={<Concerts />} />
      <Route path="/infos/*" element={<Infos />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contactForm" element={<ContactForm />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/legalNotice" element={<LegalNotice />} />
      <Route path="/billetterie" element={<Billetterie/>} />
      
      <Route path="/produit/:id" component={<PageProduit />} />
      <Route path="/myMap" element={<MyMap />} />
    
    </Routes>
  );
}

export default AppRoutes;





