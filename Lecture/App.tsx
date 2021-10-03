import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {create} from './util/createPerson';

export default function App() {
  const person = create();
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>
  );
}
