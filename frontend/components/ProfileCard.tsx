import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

interface User {
  name: string;
  longitude: number;
  latitude: number;
  email: string;
}

const dummyUser: User = {
  name: "John Doe",
  longitude: -122.4194,
  latitude: 37.7749,
  email: "john.doe@example.com",
};

const ProfileCard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:2000/user")
      .then((response: { data: User }) => {
        setUser(response.data);
      })
      .catch((error: any) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.coordinates}>
        Longitude: {user.longitude}
        Latitude:{user.latitude}
      </Text>
      <Text style={styles.email}>Email: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  topHalf: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  coordinates: {
    fontSize: 14,
  },
  email: {
    fontSize: 14,
  },
});

export default ProfileCard;
