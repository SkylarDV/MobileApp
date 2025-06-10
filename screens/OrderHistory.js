import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useOrderHistory } from '../contexts/OrderHistoryContext';

const OrderHistory = () => {
  const navigation = useNavigation();
  const { orders } = useOrderHistory();

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: 'absolute', left: 20, top: 55, zIndex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={32} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>   Order History</Text>
      </View>
      <View style={styles.container}>
        {orders.length === 0 ? (
          <Text style={styles.text}>No orders yet.</Text>
        ) : (
          <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
            {orders.map((order, idx) => {
              const orderTotal = order.reduce((sum, item) => sum + item.price, 0);
              return (
                <View
                  key={idx}
                  style={styles.orderCard}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>Order #{idx + 1}</Text>
                  {order.map((item, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <View style={styles.divider} />}
                      <Text style={{ fontSize: 16 }}>
                        {item.name} - {item.size} × {item.qty} = €{item.price}
                      </Text>
                    </React.Fragment>
                  ))}
                  <Text style={styles.orderTotal}>Total: €{orderTotal}</Text>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: '#f7e9ff',
    overflow: "hidden",
    padding: 0,
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7e9ff',
    width: '100%',
  },
  text: { fontSize: 22, color: '#a496e5', fontWeight: 'bold' },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    marginBottom: 24,
    alignItems: 'flex-start',
    shadowColor: '#a496e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  orderTotal: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#a496e5',
    marginTop: 12,
    alignSelf: 'flex-end',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    alignSelf: 'stretch',
    width: '100%',
    marginVertical: 6,
  },
});

export default OrderHistory;