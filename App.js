import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCard from "./components/ProductCard.js";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Art Catalogue</Text>
      </View>

      <ScrollView width="100%" display="flex" alignItems="center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
