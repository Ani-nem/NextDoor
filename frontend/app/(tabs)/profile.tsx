import ProfileCard from "@/components/ProfileCard";
import React from "react";
import { View, Text } from "react-native";

const Profile: React.FC = () => {
  return (
    <View>
      <Text>Profile</Text>
      <ProfileCard />
      <Text>Settings</Text>
    </View>
  );
};

export default Profile;
