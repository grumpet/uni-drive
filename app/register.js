import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';

export default function Register() {
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [universityOrWork, setUniversityOrWork] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

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

      <Text>Date of Birth:</Text>
      <TextInput
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
        placeholder="Enter your date of birth (dd/mm/yyyy)"
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

      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}