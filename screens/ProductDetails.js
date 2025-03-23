import { useState } from "react";
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const ProductDetails = ( {route} ) => {
    const {title, sizes, desc, image, tPrice, sPrice, mPrice, lPrice} = route.params;
    
    const [tinyQuantity, setTinyQuantity] = useState(0);
    const increaseTinyQuantity = () => {setTinyQuantity(tinyQuantity + 1);}
    const decreaseTinyQuantity = () => { if(tinyQuantity>=1) {setTinyQuantity(tinyQuantity - 1);}};

    const [smallQuantity, setSmallQuantity] = useState(0);
    const increaseSmallQuantity = () => {setSmallQuantity(smallQuantity + 1);}
    const decreaseSmallQuantity = () => { if(smallQuantity>=1) {setSmallQuantity(smallQuantity - 1);}};

    const [mediumQuantity, setMediumQuantity] = useState(0);
    const increaseMediumQuantity = () => {setMediumQuantity(mediumQuantity + 1);}
    const decreaseMediumQuantity = () => { if(mediumQuantity>=1) {setMediumQuantity(mediumQuantity - 1);}};

    const [largeQuantity, setLargeQuantity] = useState(0);
    const increaseLargeQuantity = () => {setLargeQuantity(largeQuantity + 1);}
    const decreaseLargeQuantity = () => { if(largeQuantity>=1) {setLargeQuantity(largeQuantity - 1);}};

  return (
    <View style={styles.page}>
        <Image source={image} style={styles.image}/>
        <ScrollView width="100%" position="absolute" top="340" height="25%" display="flex" alignItems="center"> 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.sizelist}>Available Sizes: {sizes}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </ScrollView>
        

        <View style={styles.checkout}> 
            <View style={styles.sizes}> 
                <View style={styles.quantity}> 
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
                    <Text style={styles.desc}>${tPrice}/piece</Text>
                </View>
                <View style={styles.quantity}> 
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
                    <Text style={styles.desc}>${sPrice}/piece</Text>
                </View>
                <View style={styles.quantity}> 
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
                    <Text style={styles.desc}>${mPrice}/piece</Text>
                </View>
                <View style={styles.quantity}> 
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
                    <Text style={styles.desc}>${lPrice}/piece</Text>
                </View>
            </View>
            <View> 
                <Text style={styles.title}>Total Price: €{tinyQuantity*tPrice + smallQuantity*sPrice + mediumQuantity*mPrice + largeQuantity*lPrice}</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.text}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
            
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
        height: 300,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 5,
    },
    desc: {
        fontSize: 15,
        color: "#666",
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
        width: 75,
        marginBottom: 5,
        backgroundColor:"#fff",
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",     
    },
    sizes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    quantity: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    sizelist: {
        fontSize: 17,
        color: "#0000000",
    },
    checkout: {
        display: "flex",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: "110%",
        marginTop: 20,
        bottom: 0,
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 20,
    },
})

export default ProductDetails;