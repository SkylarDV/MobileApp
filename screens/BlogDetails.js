import { ScrollView, View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import RenderHtml from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BlogDetails = ({ route }) => {
    const { title, body, image } = route.params;
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 20, top: 55, zIndex: 1 }}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={32} color="#666" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>   More About This Post</Text>
            </View>
            <Image source={{ uri: image }} style={styles.image} />
            <ScrollView
                width="100%"
                contentContainerStyle={{ alignItems: "center" }}
                style={{ flex: 1 }}
            >
                <Text style={styles.title}>{title}</Text>
                <View style={styles.bodyContainer}>
                    <RenderHtml contentWidth={width} source={{ html: body }} />
                </View>
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
        padding: 0,
        backgroundColor: '#f7e9ff',
        overflow: "hidden",
        paddingTop: 0,
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
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
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
    bodyContainer: {
        width: "90%",
        marginVertical: 10,
        marginHorizontal: 10,
    },
})

export default BlogDetails;