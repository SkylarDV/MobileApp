import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen.js";
import ProductDetails from "./screens/ProductDetails.js";
import ProductList from './screens/ProductList.js';
import BlogList from './screens/BlogList.js';
import BlogDetails from './screens/BlogDetails.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="BlogList" component={BlogList} />
        <Stack.Screen name="BlogDetails" component={BlogDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}