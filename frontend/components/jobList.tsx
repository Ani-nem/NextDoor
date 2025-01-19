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
import { Job } from "../types/job";

interface JobListProps {
    jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({jobs}) => {
    const saveIcon = require("../assets/images/save.png");

    interface Job {
        id: number;
        title: string;
        time: string;
        status: string;
        description: string;
        user_id: number;
    }


    return (
        <View style={styles.screen}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {jobs.map((job) => (
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
                                            {job.location}
                                            {job.location}
                                        </Text>
                                        <Text style={styles.details}>
                                            {new Date(job.time).toLocaleString(
                                                "en-US",
                                                {
                                                    month: "numeric", // Full month name (e.g., January)
                                                    day: "numeric", // Day of the month
                                                    year: "numeric", // Full year
                                                    hour: "2-digit", // Hours
                                                    minute: "2-digit", // Minutes
                                                    hour12: true, // 12-hour format
                                                }
                                            )}
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
        width: "95%",
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
