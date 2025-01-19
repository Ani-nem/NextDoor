import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const saveIcon = require("../assets/images/save.png");

    interface Job {
        id: number;
        title: string;
        longitude: number;
        latitude: number;
        time: string;
        status: string;
        description: string;
        user_id: number;
    }
    const dummyData: Job[] = [
        {
            id: 1,
            title: "Job 1",
            longitude: 123.456,
            latitude: 78.9,
            time: "9:00 AM",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet",
            user_id: 123,
        },
        {
            id: 2,
            title: "Job 2",
            longitude: 45.678,
            latitude: 12.34,
            time: "2:00 PM",
            status: "Completed",
            description: "Consectetur adipiscing elit",
            user_id: 456,
        },
        {
            id: 3,
            title: "Job 3",
            longitude: 98.765,
            latitude: 43.21,
            time: "5:00 PM",
            status: "In Progress",
            description: "Sed do eiusmod tempor incididunt",
            user_id: 789,
        },
        {
            id: 4,
            title: "Job 1",
            longitude: 123.456,
            latitude: 78.9,
            time: "9:00 AM",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet",
            user_id: 123,
        },
        {
            id: 5,
            title: "Job 2",
            longitude: 45.678,
            latitude: 12.34,
            time: "2:00 PM",
            status: "Completed",
            description: "Consectetur adipiscing elit",
            user_id: 456,
        },
        {
            id: 6,
            title: "Job 3",
            longitude: 98.765,
            latitude: 43.21,
            time: "5:00 PM",
            status: "In Progress",
            description: "Sed do eiusmod tempor incididunt",
            user_id: 789,
        },
        {
            id: 7,
            title: "Job 1",
            longitude: 123.456,
            latitude: 78.9,
            time: "9:00 AM",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet",
            user_id: 123,
        },
        {
            id: 8,
            title: "Job 2",
            longitude: 45.678,
            latitude: 12.34,
            time: "2:00 PM",
            status: "Completed",
            description: "Consectetur adipiscing elit",
            user_id: 456,
        },
        {
            id: 9,
            title: "Job 3",
            longitude: 98.765,
            latitude: 43.21,
            time: "5:00 PM",
            status: "In Progress",
            description: "Sed do eiusmod tempor incididunt",
            user_id: 789,
        },
    ];

    useEffect(() => {
        fetch("http://localhost:2000/commissions")
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.screen}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {dummyData.map((job) => (
                    <TouchableOpacity key={job.id} style={styles.parentContainer}>
                        <View style={styles.container}>
                            <LinearGradient
                                style={styles.jobContainer}
                                colors={["white", "#8899ff"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <View style={styles.textWrapper}>
                                    <Text style={styles.title}>
                                        {job.title}
                                    </Text>
                                    <View style={styles.detailWrapper}>
                                        <Text style={styles.details}>
                                            {job.longitude}, {job.latitude}
                                        </Text>
                                        <Text style={styles.details}>
                                            {job.time}
                                        </Text>
                                    </View>
                                    <Text style={styles.description}>
                                        {job.description}
                                    </Text>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        source={saveIcon}
                                        style={styles.iconWrapper}
                                    ></Image>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window"); // Get the device height

const styles = StyleSheet.create({
    screen: {
        position: "absolute", // Position the screen
        display: "flex",
        top: 0, // Set the top position
        height: SCREEN_HEIGHT * 0.795, // Set the height of the screen
        paddingBottom: 20, // Add padding to the bottom
        alignItems: "center",
        
    },
    scrollContainer: {
        alignItems: "center", // Center te content horizontally
        paddingVertical: 10, // Add padding for vertical spacing
        gap: 20, // Space between items
    },
    container: {
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    parentContainer: {
        width: "100%",
        alignItems: "center",
    },
    jobContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        height: 80,
        width: "90%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#95AED6",
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    detailWrapper: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "flex-start",
    },
    details: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#555",
        marginTop: 4,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginTop: 4,
    },
    iconWrapper: {
        marginLeft: 10,
    },
});

export default JobList;
