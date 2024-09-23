// frontend/src/App.js
import React from 'react';
import './styles/App.css'; // Assure-toi d'avoir un fichier de styles correspondant

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Holfit - Your Fitness Journey Starts Here</h1>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Workouts</a>
          <a href="#">Nutrition</a>
          <a href="#">Community</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="intro-section">
          <h2>Welcome to Holfit</h2>
          <p>Your all-in-one platform for fitness, health, and wellness. Discover personalized workouts, connect with a community of like-minded individuals, and track your progress with ease.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features-section">
          <h2>Why Choose Holfit?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Personalized Workouts</h3>
              <p>Get workout plans tailored to your fitness level and goals.</p>
            </div>
            <div className="feature-card">
              <h3>Track Your Progress</h3>
              <p>Monitor your fitness journey with our intuitive dashboard.</p>
            </div>
            <div className="feature-card">
              <h3>Join the Community</h3>
              <p>Connect with others, join groups, and stay motivated.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Holfit. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
