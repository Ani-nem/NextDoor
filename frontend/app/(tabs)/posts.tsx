import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>ND</Text>
                <Text>My Posts</Text>
                <Link href={"/profile"}>Profile</Link>
            </View>
            <Text>OUR POSTS</Text>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    header: {
        marginTop: 70,
        marginBottom: 20,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
