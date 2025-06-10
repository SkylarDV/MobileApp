import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useUser } from '../contexts/UserContext';

const HomeScreen = ({ navigation }) => {
  const { username, profilePic } = useUser();

  return (
    <View style={styles.outer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      <View style={styles.centerContainer}>
        <ImageBackground
          source={require('../assets/HomeBg.jpg')}
          style={styles.middle}
          imageStyle={{ borderRadius: 20 }}>
          <View style={styles.inner}>
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
            <Text style={styles.greeting}>Welcome, {username}!</Text>
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
      </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 30,
    marginTop: 0,
    marginBottom: 10,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 10,
  },
  middle: {
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
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
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#a496e5',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
