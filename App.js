import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./screens/HomeScreen.js";
import ProductList from './screens/ProductList.js';
import BlogList from './screens/BlogList.js';
import Profile from './screens/Profile.js';
import Cart from './screens/Cart.js';
import ProductDetails from './screens/ProductDetails.js'; 
import BlogDetails from './screens/BlogDetails.js'; 
import OrderHistory from './screens/OrderHistory.js'; 
import { CartProvider } from './contexts/CartContext';
import { OrderHistoryProvider } from './contexts/OrderHistoryContext';
import { UserProvider } from './contexts/UserContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 100,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        tabBarIcon: ({ focused, color, size }) => {
          size = 28;
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Prints') {
            iconName = focused ? 'image' : 'image-outline';
          } else if (route.name === 'Blogs') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#a496e5',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Blogs" component={BlogList} />
      <Tab.Screen name="Prints" component={ProductList} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <OrderHistoryProvider>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="MainTabs" component={Tabs} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="BlogDetails" component={BlogDetails} />
              <Stack.Screen name="OrderHistory" component={OrderHistory} />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </OrderHistoryProvider>
    </UserProvider>
  );
}