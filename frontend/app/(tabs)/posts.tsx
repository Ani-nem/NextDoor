import { View, Text, StyleSheet, ScrollView, RefreshControl} from "react-native";
import React, {useState, useEffect} from "react";
import { Link } from "expo-router";
import { Job } from "@/types/job";
import JobList from "@/components/jobList";

const Page = () => {
  const [jobs, setJobs] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const dummyData: Job[] = [
        {
            id: 1,
            title: "Job 1",
            time: "9:00 AM",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet",
            user_id: 123,
            location: "New York",
        },
        {
            id: 2,
            title: "Job 2",
            time: "2:00 PM",
            status: "Completed",
            description: "Consectetur adipiscing elit",
            user_id: 456,
            location: "Los Angeles",
        },
        {
            id: 3,
            title: "Job 3",
            time: "5:00 PM",
            status: "In Progress",
            description: "Sed do eiusmod tempor incididunt",
            user_id: 789,
            location: "Chicago",
        },
        {
            id: 4,
            title: "Job 4",
            time: "10:00 AM",
            status: "Pending",
            description: "Ut enim ad minim veniam",
            user_id: 101,
            location: "San Francisco",
        },
        {
            id: 5,
            title: "Job 5",
            time: "3:00 PM",
            status: "Completed",
            description: "Duis aute irure dolor in reprehenderit",
            user_id: 202,
            location: "Seattle",
        },
        {
            id: 6,
            title: "Job 6",
            time: "6:00 PM",
            status: "In Progress",
            description: "Excepteur sint occaecat cupidatat non proident",
            user_id: 303,
            location: "Miami",
        },
        {
            id: 7,
            title: "Job 7",
            time: "9:00 AM",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet",
            user_id: 404,
            location: "Boston",
        },
        {
            id: 8,
            title: "Job 8",
            time: "2:00 PM",
            status: "Completed",
            description: "Consectetur adipiscing elit",
            user_id: 505,
            location: "San Diego",
        },
        {
            id: 9,
            title: "Job 9",
            time: "5:00 PM",
            status: "In Progress",
            description: "Sed do eiusmod tempor incididunt",
            user_id: 606,
            location: "Houston",
        },
        {
            id: 10,
            title: "Job 10",
            time: "8:00 AM",
            status: "Pending",
            description: "Vestibulum ante ipsum primis",
            user_id: 707,
            location: "Denver",
        },
        {
            id: 11,
            title: "Job 11",
            time: "1:00 PM",
            status: "Completed",
            description: "Fusce euismod consequat ante",
            user_id: 808,
            location: "Phoenix",
        },
        {
            id: 12,
            title: "Job 12",
            time: "4:00 PM",
            status: "In Progress",
            description: "Pellentesque eu pretium quis",
            user_id: 909,
            location: "Atlanta",
        },
        {
            id: 13,
            title: "Job 13",
            time: "7:00 PM",
            status: "Pending",
            description: "Nullam id dolor id",
            user_id: 1010,
            location: "Dallas",
        },
        {
            id: 14,
            title: "Job 14",
            time: "10:00 AM",
            status: "Completed",
            description: "Vivamus sagittis lacus vel",
            user_id: 1111,
            location: "Philadelphia",
        },
        // Add more job objects here with the location property
    ];

    const fetchJobs = () => {
        fetch("http://localhost:2000/commission/myposts")
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error(error));
    }

    const onRefresh = () =>{
        setRefreshing(true);
        fetchJobs();
        setRefreshing(false);
    }

    useEffect(() => {
        fetchJobs();
    }, []);



    return (
        <ScrollView 
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.header}>
                <Text>ICON</Text>
                <Text>My Posts</Text>
                <Link href={"/profile"}>Profile</Link>
            </View>
            <View style={styles.jobListContainer}>
                <JobList jobs={jobs} />
            </View>
        </ScrollView>
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
    jobListContainer: {
        alignItems: "center",
    },
});
