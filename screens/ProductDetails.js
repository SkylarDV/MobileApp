import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from "react-native";

const ProductDetails = ( {navigation} ) => {
  return (
    <View style={styles.page}>
            <Image source={require("../images/print1.png")} style={styles.image}/>
            <Text style={styles.title}>Singing Girl - Concert</Text>
            <Text style={styles.desc}>Available Sizes:</Text>
            <Text style={styles.desc}>15 x 15 - 20 x 20 - 30 x 30 - 40 x 40</Text> 
    </View>
);
}

const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "95%",
        height: "100%",
        padding: 15,
        backgroundColor: '#f7e9ff',
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

export default ProductDetails;