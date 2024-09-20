import React from 'react';
import '../styles/GymCard.css';

const GymCard = ({ gym }) => {
  return (
    <div className="gym-card">
      <img src={gym.image} alt={gym.name} />
      <h3>{gym.name}</h3>
      <p>{gym.description}</p>
      <button>Reserve Now</button>
    </div>
  );
};

export default GymCard;
