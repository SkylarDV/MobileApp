import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.message}>This is the profile screen.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go to Home</Text>
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

export default Profile;
