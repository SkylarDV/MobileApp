import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const ProductCard = ({ title, sizes, image, onPress }) => {
  return (
    <View style={styles.card}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{sizes}</Text>
        <TouchableOpacity style={styles.button} 
          onPress={onPress}>
          <Text style={styles.text}>More Information</Text>
        </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 30,
        overflow: "hidden",
        marginTop: 10,
    },
    image: {
        width: "95%",
        height: 200,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    },
    desc: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
    },
    button: {
        backgroundColor: '#a496e5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
      },
      text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default ProductCard;