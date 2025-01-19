import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import JobList from "@/components/jobList";

const Page = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>ICON</Text>
                <Text>Profile & Settings</Text>
                <Link href={"/profile"}>Profile</Link>
            </View>
            <View style={styles.jobListContainer}>
                <JobList />
            </View>
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
        marginTop: 60,
        marginBottom: 20,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    jobListContainer: {
      alignItems: "center",
    }
});
