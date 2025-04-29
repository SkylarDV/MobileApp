import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


const HomeScreen = ( {navigation} ) => {
 
 

return (
  <View >
    <TouchableOpacity 
      onPress={() => navigation.navigate('ProductList')}>
      <Text>ProductList</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      onPress={() => navigation.navigate('BlogList')}>
      <Text>BlogList</Text>
    </TouchableOpacity>
  </View>    
);
}
export default HomeScreen;