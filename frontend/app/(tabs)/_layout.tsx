import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";

const TabLayout = () => {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen options={{ headerShown: false, title:"Browse"}} name="index" />
            <Tabs.Screen options={{ headerShown: false, title:"Create"}} name="create" />
            <Tabs.Screen options={{ headerShown: false, title:"Posts"}} name="posts" />
        </Tabs>
    );
};

export default TabLayout;
