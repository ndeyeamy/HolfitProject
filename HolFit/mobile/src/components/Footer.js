import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Holfit, All Rights Reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#282c34',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Footer;
