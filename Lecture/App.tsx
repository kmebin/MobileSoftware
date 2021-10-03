import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {create} from './util/createPerson';

// 속성이 없다면 function 키워드를 사용하여 함수를 작성하는게 편리
// 속성이 있다면 화살표 함수로 작성하는게 편리
const App = () => {
  const person = create();
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>
  );
};

export default App;
