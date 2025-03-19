import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from "../components/ProductCard.js";
import Print1 from "../images/print1.png";
import Print2 from "../images/print2.png";
import Print3 from "../images/print3.png";
import Print4 from "../images/print4.png";
import Print5 from "../images/print5.png";

const HomeScreen = ( {navigation} ) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67b078a6cb9d879ac703a9ed/products", {
        headers: {
            Authorization: "Bearer a59179b4b660b71fbbfdd2d32510bc5a1db5157ee70d86a49a25cd265d25bae0"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        // Group SKUs under the same product
        const formattedProducts = data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          desc: item.product.fieldData.description,
          sizes: item.product.fieldData.sizelist,
          image: { uri: item.product.fieldData.printimage.url},
          tPrice: item.product.fieldData.tprice,  
          sPrice: item.product.fieldData.sprice,  
          mPrice: item.product.fieldData.mprice,  
          lPrice: item.product.fieldData.lprice   
        }));

        setProducts(formattedProducts);
    })
    .catch((error) => console.error("Error:", error));
}, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Art Catalogue</Text>
      </View>

      <ScrollView width="100%" display="flex" alignItems="center">
        {products.map((product) => (
          <ProductCard 
              key={product.id}
              title={product.title} 
              sizes={product.sizes}
              desc={product.desc} 
              image={product.image}
              tPrice={product.tPrice} 
              sPrice={product.sPrice} 
              mPrice={product.mPrice}
              lPrice={product.lPrice}
              onPress={() => navigation.navigate("Details", product)} 
          />    
      ))}
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7e9ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  header: {
    backgroundColor: "#fff",
    height:120,
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  }
});

export default HomeScreen;