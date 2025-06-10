import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Wishlist = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wishlist</Text>
            <Text style={styles.message}>You haven't wishlisted any prints yet.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Products')}>
                <Text style={styles.buttonText}>Go to Products</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    message: { fontSize: 16, marginBottom: 20 },
    button: { backgroundColor: '#a496e5', padding: 10, borderRadius: 8 },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default Cart;
