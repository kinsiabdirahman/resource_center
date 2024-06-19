import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ResourceCenter from './ResourceCenter';
import EmergencyContacts from './EmergencyContacts';
import LegalRights from './LegalRights';
import FirstAidGuides from './FirstAidGuides';
import VolunteerSignup from './VolunteerSignup';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/resource-center">Resource Center</Link></li>
                        <li><Link to="/emergency-contacts">Emergency Contacts</Link></li>
                        <li><Link to="/legal-rights">Legal Rights</Link></li>
                        <li><Link to="/first-aid-guides">First Aid Guides</Link></li>
                        <li><Link to="/volunteer-signup">Volunteer Sign-Up</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<div><h1>Welcome to the Protest Resource Center</h1></div>} />
                    <Route path="/resource-center" element={<ResourceCenter />} />
                    <Route path="/emergency-contacts" element={<EmergencyContacts />} />
                    <Route path="/legal-rights" element={<LegalRights />} />
                    <Route path="/first-aid-guides" element={<FirstAidGuides />} />
                    <Route path="/volunteer-signup" element={<VolunteerSignup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
