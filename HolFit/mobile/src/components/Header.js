import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Holfit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#282c34',
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Header;
