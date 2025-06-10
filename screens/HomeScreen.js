import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.outer}>
      <ImageBackground
        source={require('../assets/HomeBg.jpg')}
        style={styles.middle}
        imageStyle={{ borderRadius: 20 }}>
        <View style={styles.inner}>
          <Text style={styles.mainTitle}>Starlight</Text>
          <Text style={styles.subTitle}>Art Prints</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductList')}>
            <Text style={styles.buttonText}>Product List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BlogList')}>
            <Text style={styles.buttonText}>Blog List</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#f7e9ff',
    justifyContent: 'center',
    alignItems: 'center',  },
  middle: {
      
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,       // internal spacing
  },
  inner: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#a496e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 40,
    color: '#000',
    marginBottom: 20,
  },  
});
