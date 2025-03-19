import { useState } from "react";
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const ProductDetails = ( {route} ) => {
    const {title, desc, image, tPrice, sPrice, mPrice, lPrice} = route.params;
    
    const [tinyQuantity, setTinyQuantity] = useState(1);
    const increaseTinyQuantity = () => {setTinyQuantity(tinyQuantity + 1);}
    const decreaseTinyQuantity = () => { if(tinyQuantity>=1) {setTinyQuantity(tinyQuantity - 1);}};

    const [smallQuantity, setSmallQuantity] = useState(1);
    const increaseSmallQuantity = () => {setSmallQuantity(smallQuantity + 1);}
    const decreaseSmallQuantity = () => { if(smallQuantity>=1) {setSmallQuantity(smallQuantity - 1);}};

    const [mediumQuantity, setMediumQuantity] = useState(1);
    const increaseMediumQuantity = () => {setMediumQuantity(mediumQuantity + 1);}
    const decreaseMediumQuantity = () => { if(mediumQuantity>=1) {setMediumQuantity(mediumQuantity - 1);}};

    const [largeQuantity, setLargeQuantity] = useState(1);
    const increaseLargeQuantity = () => {setLargeQuantity(largeQuantity + 1);}
    const decreaseLargeQuantity = () => { if(largeQuantity>=1) {setLargeQuantity(largeQuantity - 1);}};

  return (
    <View style={styles.page}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>

        <View> 
            <Text style={styles.title}>Total Price: €{tinyQuantity*tPrice + smallQuantity*sPrice + mediumQuantity*mPrice + largeQuantity*lPrice}</Text>
        </View>

        <Text style={styles.title}>Tiny</Text>
        <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseTinyQuantity}>
                <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{tinyQuantity}</Text>

            <TouchableOpacity style={styles.quantityButton} onPress={increaseTinyQuantity}>
                <Text style={styles.quantityText}>+</Text>  
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Small</Text>
        <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseSmallQuantity}>
                <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{smallQuantity}</Text>

            <TouchableOpacity style={styles.quantityButton} onPress={increaseSmallQuantity}>
                <Text style={styles.quantityText}>+</Text>  
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Medium</Text>
        <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseMediumQuantity}>
                <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{mediumQuantity}</Text>

            <TouchableOpacity style={styles.quantityButton} onPress={increaseMediumQuantity}>
                <Text style={styles.quantityText}>+</Text>  
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Large</Text>
        <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseLargeQuantity}>
                <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{largeQuantity}</Text>

            <TouchableOpacity style={styles.quantityButton} onPress={increaseLargeQuantity}>
                <Text style={styles.quantityText}>+</Text>  
            </TouchableOpacity>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: 15,
        backgroundColor: '#f7e9ff',
        overflow: "hidden",
        paddingTop: 30,
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
      quantityContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between",
        justifyContent: "space-between",
        width: 100,
        marginBottom: 5,
        backgroundColor:"#fff",
        padding: 5,
        borderRadius: 10,
      }
})

export default ProductDetails;