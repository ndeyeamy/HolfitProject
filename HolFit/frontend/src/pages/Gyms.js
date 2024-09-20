import React, { useEffect, useState } from 'react';
import GymCard from '../components/GymCard';
import { fetchGyms } from '../services/apiService';

const Gyms = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetchGyms().then((data) => setGyms(data));
  }, []);

  return (
    <div>
      <h1>Available Gyms</h1>
      <div className="gym-list">
        {gyms.map((gym, index) => (
          <GymCard key={index} gym={gym} />
        ))}
      </div>
    </div>
  );
};

export default Gyms;
