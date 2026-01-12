import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const API_URL = 'http://localhost:3000';

const UserScreen = ({ navigation }) => {
  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const response = await fetch(`${API_URL}/hospitals`);
      const data = await response.json();
      setHospitals(data);
    } catch (error) {
      console.error('Could not fetch hospitals', error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Hospital</Text>
      <FlatList
        data={hospitals}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('HospitalDetails', { hospital: item })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    color: '#000',
  },
});

export default UserScreen;
