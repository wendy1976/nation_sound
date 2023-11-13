import { Route, Routes } from 'react-router-dom';
import Accueil from './Accueil';
import Concerts from './Concerts';
import ContactForm from './ContactForm';
import Faq from './Faq';
import Infos from './Infos';
import Newsletter from './Newsletter';
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
        
    </Routes>
  );
}

export default AppRoutes;





