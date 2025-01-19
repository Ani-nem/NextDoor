import { Link } from "expo-router";
import ProfileCard from "../components/ProfileCard";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href={".."}>Home</Link>
                <Text>Profile & Settings</Text>
                <Text>Logout</Text>
            </View>
            <ProfileCard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Profile;
