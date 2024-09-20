import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GymCard from '../components/GymCard';
import { fetchGyms } from '../services/apiService';

const GymsScreen = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetchGyms().then(setGyms);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {gyms.map((gym, index) => (
        <GymCard key={index} gym={gym} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default GymsScreen;
