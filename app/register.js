import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';

export default function Register() {
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [universityOrWork, setUniversityOrWork] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    // Handle the registration logic here...
  };

  return (
    <View>
      <Text>Phone:</Text>
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Enter your phone number"
      />

      <Text>Full Name:</Text>
      <TextInput
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        placeholder="Enter your full name"
      />

      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
      />

      <Text>University or Work:</Text>
      <TextInput
        value={universityOrWork}
        onChangeText={(text) => setUniversityOrWork(text)}
        placeholder="Enter your university or work"
      />

      <Text>Age:</Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      <Text>Gender:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}