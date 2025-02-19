import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ProductCard from "../components/ProductCard.js";

const HomeScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Art Catalogue</Text>
      </View>

      <ScrollView width="100%" display="flex" alignItems="center">
        <ProductCard navigation={navigation} />
        <ProductCard navigation={navigation} />
        <ProductCard navigation={navigation} />
        <ProductCard navigation={navigation} />
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