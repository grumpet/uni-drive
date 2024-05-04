import React, { useState } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';

export default function Driver() {
  const [capacity, setCapacity] = useState(1);
  const [comments, setComments] = useState('');

  return (
    <div>
      <View>
        <Text>כמה טרמפיסטים אתה יכול לקחת </Text>
        <Picker
          selectedValue={capacity}
          onValueChange={(itemValue) => setCapacity(itemValue)}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
        </Picker>
      </View>

      <View>
        <Text>חשוב לי שתדעו</Text>
        <TextInput
          value={comments}
          onChangeText={(text) => setComments(text)}
          placeholder="כתוב כאן כל מידע נוסף שחשוב לך לשתף על טרמפיסטים עתידיים"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
    </div>
  );
}