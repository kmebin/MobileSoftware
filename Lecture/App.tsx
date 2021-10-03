import React from 'react';
import {SafeAreaView, Alert, Button} from 'react-native';
// Touchable 컴포넌트 : 버튼 역할을 할 수 있는 2가지 컴포넌트
// 단, 한 개의 자식 컴포넌트만 가질 수 있음
import {TouchableOpacity, TouchableHighlight, Text} from 'react-native';

const onPress = () => Alert.alert('pressed!', 'message');

// Text 컴포넌트를 버튼처럼 동작하게 하는 예시
const App = () => {
  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default App;
