import { useState } from "react";
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../contexts/CartContext';

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

    const navigation = useNavigation();
    const { addToCart } = useCart();
    const [addedMessage, setAddedMessage] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const totalQuantity = tinyQuantity + smallQuantity + mediumQuantity + largeQuantity;

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: 'absolute', left: 20, top: 55, zIndex: 1 }} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={32} color="#666" /> 
        </TouchableOpacity>
        <Text style={styles.headerTitle}>   More About This Print</Text>
      </View>
      <Image source={image} style={styles.image}/>
      <ScrollView style={{ width: "100%", maxHeight: 200 }} contentContainerStyle={{ alignItems: "center" }}>
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
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: totalQuantity === 0 ? '#ccc' : '#a496e5' }
                ]}
                disabled={totalQuantity === 0}
                onPress={() => {
                  addToCart(
                    { title, sizes, desc, image, tPrice, sPrice, mPrice, lPrice },
                    {
                      tiny: tinyQuantity,
                      small: smallQuantity,
                      medium: mediumQuantity,
                      large: largeQuantity,
                    }
                  );
                  setShowModal(true);
                }}
              >
                <Text style={styles.text}>Add To Cart</Text>
              </TouchableOpacity>
              {addedMessage && (
                <Text style={{ color: '#4BB543', fontWeight: 'bold', marginTop: 8 }}>
                  Added to cart!
                </Text>
              )}
          </View>
          
      </View>
      <Modal
  visible={showModal}
  transparent
  animationType="fade"
  onRequestClose={() => setShowModal(false)}
>
  <View style={{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <View style={{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
      width: 300,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4BB543', marginBottom: 16 }}>Added to cart!</Text>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#a496e5',
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 8,
            marginRight: 8,
          }}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('MainTabs', { screen: 'Cart' });
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Go to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#eee',
            paddingVertical: 10,
            paddingHorizontal: 18,
            borderRadius: 8,
          }}
          onPress={() => setShowModal(false)}
        >
          <Text style={{ color: '#a496e5', fontWeight: 'bold' }}>Keep Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </View>
);
}

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
        marginHorizontal: 20,
        marginBottom: 10,     
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
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%", 
    },
    quantity: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    sizelist: {
        fontSize: 17,
        color: "#0000000",
    },
    checkout: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 20,
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 10,
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
})

export default ProductDetails;