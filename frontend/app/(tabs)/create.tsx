import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const Page = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async () => {
        const data = {
            title,
            description,
            radius: 10, // Placeholder
            time: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(), // Placeholder
            user_id: 1, // Temporary user ID
            location: "DUMMY LOCATION", // Placeholder
        };
        try {
            const response = await fetch("http://localhost:2000/commission", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Alert.alert("Success", "Commission submitted successfully");
            } else {
                Alert.alert("Error", "Failed to submit commission");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Something went wrong");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>ICON</Text>
                <Text>next door</Text>
                <Link href={"/profile"}>Profile</Link>
            </View>
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>New Commission</Text>
                </View>
                <Text style={styles.inputTitle}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Enter title"
                />
                <Text style={styles.inputTitle}>Location</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    onChangeText={setLocation}
                    placeholder="Enter location"
                />
                <Text style={styles.inputTitle}>Time</Text>
                <TextInput
                    style={styles.input}
                    value={time}
                    onChangeText={setTime}
                    placeholder="Enter time"
                />
                <Text style={styles.inputTitle}>Description</Text>
                <TextInput
                    style={styles.description}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Enter description"
                    multiline
                />
                <View style={styles.titleContainer}>
                    <TouchableOpacity
                        style={styles.submit}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
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
    titleContainer: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    header: {
        marginTop: 60,
        marginBottom: 20,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        borderRadius: 10,
        borderColor: "#E0E0E0",
        backgroundColor: "white",
        width: "90%",
        shadowOffset: { width: 0, height: 2 },
    },
    inputTitle: {
        paddingLeft: 15,
    },
    input: {
        margin: 12,
        backgroundColor: "#E0E0E0",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#E0E0E0",
        padding: 10,
    },
    description: {
        margin: 12,
        backgroundColor: "#E0E0E0",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#E0E0E0",
        padding: 10,
        height: 80,
    },
    submit: {
        width: "30%",
        backgroundColor: "#0c42c2",
        borderRadius: 5,
        marginBottom: 20,
    },
    submitText: {
        color: "white",
        padding: 10,
        textAlign: "center",
    },
});
