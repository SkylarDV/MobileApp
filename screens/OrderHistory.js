import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderHistory = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Order History Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7e9ff' },
  text: { fontSize: 22, color: '#a496e5', fontWeight: 'bold' },
});

export default OrderHistory;