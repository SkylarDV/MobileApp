import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ProductCard from "../components/ProductCard.js";
import Print1 from "../images/print1.png";
import Print2 from "../images/print2.png";
import Print3 from "../images/print3.png";
import Print4 from "../images/print4.png";
import Print5 from "../images/print5.png";

const HomeScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Art Catalogue</Text>
      </View>

      <ScrollView width="100%" display="flex" alignItems="center">
        <ProductCard 
          title="Singing Girl - Concert" 
          desc = "15 x 15 - 20 x 20 - 30 x 30 - 40 x 40" 
          image = {Print1} 
          onPress={()=> navigation.navigate("Details", 
            {title: "Singing Girl - Concert", 
            desc: "15 x 15 - 20 x 20 - 30 x 30 - 40 x 40",
            image: Print1,
            tPrice: 15, sPrice: 20, mPrice: 25, lPrice: 35})} 
        />
        <ProductCard 
          title="Dramatic Elegance - Queen" 
          desc = "11 x 15 - 15 x 20 - 20 x 27 - 31 x 41" 
          image = {Print2} 
          onPress={()=> navigation.navigate("Details", 
            {title: "Dramatic Elegance - Queen", 
            desc: "11 x 15 - 15 x 20 - 20 x 27 - 31 x 41",
            image: Print2,
            tPrice: 10, sPrice: 15, mPrice: 20, lPrice: 30})} 
          />
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