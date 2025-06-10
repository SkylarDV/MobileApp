import {ScrollView, View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import RenderHtml from 'react-native-render-html';



const BlogDetails = ( {route} ) => {
    const {title, body, image} = route.params;
    const { width } = useWindowDimensions();

  return (
    <View style={styles.page}>
        <Image source={{uri:image}} style={styles.image}/>
        <ScrollView width="100%" position="absolute" top="340" height="75%" display="flex" alignItems="center"> 
            <Text style={styles.title}>{title}</Text>
            <RenderHtml contentWidth={width} source={{ html: body }} />
        </ScrollView>
        
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
    }
})

export default BlogDetails;