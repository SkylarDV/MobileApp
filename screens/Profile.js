import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const defaultProfilePic = 'https://ui-avatars.com/api/?name=User&background=a496e5&color=fff';

const Profile = ({ navigation }) => {
    const [username, setUsername] = useState('John Doe');
    const [address, setAddress] = useState('123 Main St, City');
    const [editingUsername, setEditingUsername] = useState(false);
    const [editingAddress, setEditingAddress] = useState(false);
    const [profilePic, setProfilePic] = useState(defaultProfilePic);

    const handleChangeProfilePic = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!pickerResult.canceled) {
            setProfilePic(pickerResult.assets[0].uri);
        }
    };

    return (
        <View style={styles.page}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={handleChangeProfilePic} style={styles.picContainer}>
                        <Image source={{ uri: profilePic }} style={styles.profilePic} />
                        <Text style={styles.changePicText}>Change Photo</Text>
                    </TouchableOpacity>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Username</Text>
                        {editingUsername ? (
                            <TextInput
                                style={styles.input}
                                value={username}
                                onChangeText={setUsername}
                                onBlur={() => setEditingUsername(false)}
                                autoFocus
                            />
                        ) : (
                            <TouchableOpacity onPress={() => setEditingUsername(true)}>
                                <Text style={styles.infoText}>{username}</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Address</Text>
                        {editingAddress ? (
                            <TextInput
                                style={styles.input}
                                value={address}
                                onChangeText={setAddress}
                                onBlur={() => setEditingAddress(false)}
                                autoFocus
                            />
                        ) : (
                            <TouchableOpacity onPress={() => setEditingAddress(true)}>
                                <Text style={styles.infoText}>{address}</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OrderHistory')}
                    >
                        <Text style={styles.buttonText}>View Order History</Text>
                    </TouchableOpacity>
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
    picContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: '#a496e5',
        marginBottom: 8,
    },
    changePicText: {
        color: '#a496e5',
        fontWeight: 'bold',
        fontSize: 15,
    },
    infoContainer: {
        width: '100%',
        marginBottom: 18,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#a496e5',
        marginBottom: 4,
        marginLeft: 4,
    },
    infoText: {
        fontSize: 17,
        color: '#333',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },
    input: {
        fontSize: 17,
        color: '#333',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#a496e5',
    },
    button: {
        backgroundColor: '#a496e5',
        paddingVertical: 14,
        borderRadius: 12,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#a496e5',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 1,
    },
});

export default Profile;
