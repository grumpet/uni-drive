import React from 'react';
import { View, Text } from 'react-native';

export default function Driving() {
  const drivers = [
    { name: 'Driver 1', capacity: 4 },
    { name: 'Driver 2', capacity: 2 },
    { name: 'Driver 3', capacity: 3 },
    // Add more drivers as needed...
  ];

  return (
    <View>
      {drivers.map((driver, index) => (
        <View key={index}>
          <Text>{driver.name}</Text>
          <Text>Capacity: {driver.capacity}</Text>
        </View>
      ))}
    </View>
  );
}