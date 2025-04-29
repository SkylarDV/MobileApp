import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductCard from "../components/ProductCard.js";
import { Picker } from '@react-native-picker/picker';

const categoryTitles = {
  "": "All Categories",
  "67c616b73670aff67807ca3b": "Soft",
  "67c6130ecc646e14582ac96e": "Vibrant",
  "680e59f414e9b0b83c6d151e": "Neutral",
}

const ProductList = ( {navigation} ) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOptions, setSortOptions] = useState("priceAsc");

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
          lPrice: item.product.fieldData.lprice,
          category: categoryTitles[item.product.fieldData.category[0]] || "Unknown",
        }));

        setProducts(formattedProducts);
    })
    .catch((error) => console.error("Error:", error));
}, []);

const filteredProducts = products.filter(
  (product) => (selectedCategory === "" || product.category === selectedCategory) &&
  product.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const sortedProducts = filteredProducts.sort((a, b) => {
  if (sortOptions === "priceAsc") {return a.tPrice - b.tPrice;} 
  if (sortOptions === "priceDesc") {return b.tPrice - a.tPrice;} 
  if (sortOptions === "nameAsc") {return a.title.localeCompare(b.title);}
  if (sortOptions === "nameDesc") {return b.title.localeCompare(a.title);}
});

return (
  <View style={styles.container}>
    <View style={styles.header}> 
      <Text style={styles.title}>Art Catalogue</Text>
      <Text style={{marginTop: 10, marginBottom: "-10", fontSize: 20, fontWeight: "bold"}}>Search</Text>

      <TextInput style={styles.search} 
      placeholder='What kind of image are you looking for?'
      value= {searchQuery}
      onChangeText={setSearchQuery}/>
      <View style={styles.filters}>
          <View style={styles.filtersSelect}> 
          <Text style={{marginTop: 10, marginBottom: "-10", fontSize: 15, fontWeight: "bold"}}>Filter by Category</Text>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="All Categories" value="" />
            {[...new Set(products.map((product) => product.category))].map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <View style={styles.filtersSelect}> 
          <Text style={{marginTop: 10, marginBottom: "-10", fontSize: 15, fontWeight: "bold"}}>Sort Results</Text>
          <Picker
            selectedValue={sortOptions}
            onValueChange={(itemValue) => setSortOptions(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Price (Low - High)" value="priceAsc" />
            <Picker.Item label="Price (High - Low)" value="priceDesc" />
            <Picker.Item label="Name (A - Z)" value="nameAsc" />
            <Picker.Item label="Name (Z - A)" value="nameDesc" />
          </Picker>
        </View>
      </View>
      
      
      
    </View>

    <ScrollView width="100%" display="flex" alignItems="center">
      {sortedProducts.map((product) => (
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
            onPress={() => navigation.navigate("ProductDetails", product)} 
        />    
    ))}
    </ScrollView>
    
    <StatusBar style="auto" />
  </View>
  );}

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
  },
  picker: {
    width: 150,
    height: 50,
    marginTop: 10,
    backgroundColor: "#fffff",
    borderRadius: 20,
    borderWidth: 1,  
  },
  search: {
    width: "80%",
    height: 50,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fffff",
    borderRadius: 20,
    borderWidth: 1,  
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    padding: 10,
    marginTop: 5,
  },
  filtersSelect: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  }
});

export default ProductList;