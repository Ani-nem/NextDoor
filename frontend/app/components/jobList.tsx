import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import JobItem from './jobItem';
import dummyData from '../../assets/data/dummydata.json'; // Adjust the path to your JSON file

Type JobList = {

}
export default function JobList() {
  const [jobs, setJobs] = useState<any>([]);

  useEffect(() => {
    // Parse the JSON data and set the state
    setJobs(dummyData);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <JobItem
            title={item.title}
            location={item.location}
            deadline={item.deadline}
            user={item.user}
            description={item.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
});


