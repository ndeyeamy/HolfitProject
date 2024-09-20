import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const GymCard = ({ gym }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: gym.image }} style={styles.image} />
      <Text style={styles.name}>{gym.name}</Text>
      <Text>{gym.description}</Text>
      <Button title="Reserve Now" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default GymCard;
