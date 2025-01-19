import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";

const TabLayout = () => {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen options={{ headerShown: false }} name="index" />
            <Tabs.Screen options={{ headerShown: false }} name="create" />
            <Tabs.Screen options={{ headerShown: false }} name="posts" />
        </Tabs>
    );
};

export default TabLayout;
