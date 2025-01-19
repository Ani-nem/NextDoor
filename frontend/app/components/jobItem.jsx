import { Text, View, StyleSheet, Image} from "react-native";

export default function Job() {
    return (
        <View style={styles.itemContainer}>
            <View >
                <Text>Title </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
});