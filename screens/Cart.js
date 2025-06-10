import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useCart } from '../contexts/CartContext';
import { useOrderHistory } from '../contexts/OrderHistoryContext';

const Cart = ({ navigation }) => {
    const { cart, clearCart, removeFromCart } = useCart();
    const { addOrder } = useOrderHistory();

    const total = cart.reduce((sum, item) => {
        const { tPrice = 0, sPrice = 0, mPrice = 0, lPrice = 0 } = item;
        const { tiny = 0, small = 0, medium = 0, large = 0 } = item.quantities || {};
        return sum +
            (tiny * tPrice) +
            (small * sPrice) +
            (medium * mPrice) +
            (large * lPrice);
    }, 0);

    const handleCheckout = () => {
        if (cart.length === 0) return;
        const orderItems = [];
        cart.forEach(item => {
            Object.entries(item.quantities).forEach(([size, qty]) => {
                if (qty > 0) {
                    let price = 0;
                    if (size === 'tiny') price = item.tPrice;
                    if (size === 'small') price = item.sPrice;
                    if (size === 'medium') price = item.mPrice;
                    if (size === 'large') price = item.lPrice;
                    orderItems.push({
                        name: item.title,
                        size: size.charAt(0).toUpperCase() + size.slice(1),
                        price: qty * price,
                        qty,
                        unitPrice: price,
                    });
                }
            });
        });
        addOrder(orderItems);
        clearCart();
        navigation.navigate('OrderHistory');
    };

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cart</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    {cart.length === 0 ? (
                        <Text style={styles.message}>Your cart is currently empty.</Text>
                    ) : (
                        <>
                        {cart.map((item, idx) => (
                            <View key={idx} style={styles.item}>
                                <Image source={item.image} style={styles.image} />
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 4 }}>Sizes:</Text>
                                    {Object.entries(item.quantities).map(([size, qty]) => {
                                        if (qty > 0) {
                                            let price = 0;
                                            if (size === 'tiny') price = item.tPrice;
                                            if (size === 'small') price = item.sPrice;
                                            if (size === 'medium') price = item.mPrice;
                                            if (size === 'large') price = item.lPrice;
                                            return (
                                                <Text key={size}>
                                                    {size.charAt(0).toUpperCase() + size.slice(1)}: {qty} × €{price} = <Text style={{ fontWeight: 'bold' }}>€{qty * price}</Text>
                                                </Text>
                                            );
                                        }
                                        return null;
                                    })}
                                </View>
                                <TouchableOpacity
                                    style={styles.removeButton}
                                    onPress={() => removeFromCart(idx)}
                                >
                                    <Text style={styles.removeButtonText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                        <Text style={styles.total}>Total: €{total}</Text>
                        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                            <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
                            <Text style={styles.buttonText}>Clear Cart</Text>
                        </TouchableOpacity>
                        </>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f7e9ff',
        alignItems: 'stretch',
        justifyContent: 'center',
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
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 30,
        width: '80%',
        marginHorizontal: 0,
        alignItems: 'center',
        shadowColor: '#a496e5',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 8,
    },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    message: { fontSize: 16, marginBottom: 20 },
    button: { backgroundColor: '#a496e5', padding: 10, borderRadius: 8, marginTop: 10, width: '100%', alignItems: 'center' },
    clearButton: { backgroundColor: '#e55', padding: 10, borderRadius: 8, marginTop: 10, width: '100%', alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    item: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, backgroundColor: '#f7e9ff', borderRadius: 10, padding: 10, width: '100%' },
    itemTitle: { fontWeight: 'bold', fontSize: 16 },
    image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
    total: { fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 8, color: '#a496e5' },
    checkoutButton: { backgroundColor: '#a496e5', padding: 14, borderRadius: 12, marginTop: 10, width: '100%', alignItems: 'center' },
    checkoutButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 17, letterSpacing: 1 },
    removeButton: {
        backgroundColor: '#e55',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Cart;
