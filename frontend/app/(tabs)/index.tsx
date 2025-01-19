import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import JobList from '@/components/jobList'

const Page = () => {
  return (
    <View style={styles.container}>
      <JobList />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});