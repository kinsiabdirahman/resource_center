import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ResourceCenter from './ResourceCenter';
import EmergencyContacts from './EmergencyContacts';
import LegalRights from './LegalRights';
import FirstAidGuides from './FirstAidGuides';
import VolunteerSignup from './VolunteerSignup';
import './App.css'; 
import protImage from './prov.JPG'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>RESOURCE CENTER</h1>
        </header>
        <nav className="App-navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resource-center">Resource Center</Link></li>
            <li><Link to="/emergency-contacts">Emergency Contacts</Link></li>
            <li><Link to="/legal-rights">Legal Rights</Link></li>
            <li><Link to="/first-aid-guides">First Aid Guide</Link></li>
       
          </ul>
        </nav>
        <main className="App-main">
          <Routes>
            <Route path="/" element={
              <div>
                <h2>"We are the ones we have been waiting for"</h2>
                <img src={protImage} alt="Protest" className="center-image" />
              </div>
            } />
            <Route path="/resource-center" element={<ResourceCenter />} />
            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/legal-rights" element={<LegalRights />} />
            <Route path="/first-aid-guides" element={<FirstAidGuides />} />
        
          </Routes>
        </main>
        <footer className="App-footer">
          <p>#REJECTFINANCEBILL2024</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
