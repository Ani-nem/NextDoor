import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

interface User {
    name: string;
    email: string;
    location: string;
}

const dummyData: User = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, NY",
};

const ProfileCard: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    //   useEffect(() => {
    //     axios
    //       .get("http://localhost:2000/user")
    //       .then((response: { data: User }) => {
    //         setUser(response.data);
    //       })
    //       .catch((error: any) => {
    //         console.error("There was an error fetching the user data!", error);
    //       });
    //   }, []);

    //   if (!user) {
    //     return (
    //       <View style={styles.container}>
    //         <Text>Loading...</Text>
    //       </View>
    //     );
    //   }

    useEffect(() => {
        fetch("http://localhost:2000/user/1")
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.avatarPlaceholder}>
                        {/* Placeholder for avatar */}
                    </View>
                    <View style={styles.editIcon}>
                        {/* Placeholder for an edit icon */}
                    </View>
                </View>
                <View style={styles.body}>
                    {user ? (
                        <>
                            <Text style={styles.name}>{user.name}</Text>
                            <Text style={styles.locationLabel}>
                                {user.location}
                            </Text>
                        </>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                    <View style={styles.stats}>
                        <Text style={styles.statsText}>
                            0 commissions completed
                        </Text>
                        <Text style={styles.statsText}>
                            0 commissions posted
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 10 },
    card: {
        marginTop: 20,
        paddingTop: 20,
        backgroundColor: "#F0F0F0", // Ensure a non-transparent background
        borderRadius: 10,
        width: "100%",
        // Android shadow
        elevation: 5, // Increase elevation for a more visible shadow
        // iOS shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 }, // Slightly larger offset
        shadowOpacity: 0.25, // Increase opacity
        shadowRadius: 5, // Larger radius for a softer shadow
        overflow: "visible",
    },
    header: {
        backgroundColor: "#A4C2F4", // Light blue color
        height: 100,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    avatarPlaceholder: {
        backgroundColor: "#E0E0E0",
        width: 50,
        height: 50,
        borderRadius: 25,
        position: "absolute",
        bottom: -25,
        left: 20,
    },
    editIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "#FFFFFF",
        padding: 5,
        borderRadius: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    body: {
        paddingTop: 40, // Space for avatar overlap
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
    },
    locationLabel: {
        fontSize: 12,
        color: "#808080",
        marginTop: 5,
    },
    stats: {
        marginTop: 15,
    },
    statsText: {
        fontSize: 12,
        color: "#808080",
    },
});

export default ProfileCard;
