import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar'

const TabLayout = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
        <Tabs.Screen options={{ title: 'Browse' }} name="index" />
        <Tabs.Screen options={{ title: 'Create' }} name="create" />
        <Tabs.Screen options={{ title: 'My posts' }} name="posts" />
    </Tabs>
  )
}

export default TabLayout