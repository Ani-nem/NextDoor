import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

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
            latitude: 78.90,
            time: "9:00 AM",
            status: "Pending",
            description: "Lorem ipsum dolor sit amet",
            user_id: 123
        },
        {
            id: 2,
            title: "Job 2",
            longitude: 45.678,
            latitude: 12.34,
            time: "2:00 PM",
            status: "Completed",
            description: "Consectetur adipiscing elit",
            user_id: 456
        },
        {
            id: 3,
            title: "Job 3",
            longitude: 98.765,
            latitude: 43.21,
            time: "5:00 PM",
            status: "In Progress",
            description: "Sed do eiusmod tempor incididunt",
            user_id: 789
        }
    ];

    

    useEffect(() => {
        fetch('http://localhost:2000/commissions')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>Job List</Text>
            {dummyData.map(job => (
                <View key={job.id}>
                    <Text>{job.title}</Text>
                    <Text>Longitude: {job.longitude}</Text>
                    <Text>Latitude: {job.latitude}</Text>
                    <Text>Time: {job.time}</Text>
                    <Text>Status: {job.status}</Text>
                    <Text>Description: {job.description}</Text>
                    <Text>User ID: {job.user_id}</Text>
                </View>
            ))}
        </View>
    );
};

export default JobList;