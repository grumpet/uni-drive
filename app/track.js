import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import { Link } from 'expo-router';

export default function Track() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const cities = ['City 1', 'City 2', 'City 3', 'City 4', 'City 5'];

  return (
    <div>
    <View>
      <Text>Select the city you are traveling from:</Text>
      <Picker
        selectedValue={fromCity}
        onValueChange={(itemValue) => setFromCity(itemValue)}
      >
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city} value={city} />
        ))}
      </Picker>

      <Text>Select the city you are traveling to:</Text>
      <Picker
        selectedValue={toCity}
        onValueChange={(itemValue) => setToCity(itemValue)}
      >
        {cities.map((city, index) => (
          <Picker.Item key={index} label={city} value={city} />
        ))}
      </Picker>
    </View>
    <View>
        <Link href="/driver">Go to Driver</Link>
    </View>

    </div>
    
  );
}