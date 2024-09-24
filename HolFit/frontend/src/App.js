// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import des pages
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import NutritionPage from './pages/NutritionPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';

// Import des composants
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des styles globaux
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Barre de navigation */}
        <Navbar />

        {/* Contenu principal */}
        <main className="main-content">
          <Switch>
            {/* Définition des routes pour chaque page */}
            <Route exact path="/" component={HomePage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route path="/nutrition" component={NutritionPage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
	   <h1>Bienvenue sur Holfit</h1>
           <img src="/holfit.png" alt="Holfit Illustration" />
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
