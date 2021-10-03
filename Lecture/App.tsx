import React from 'react';
import {SafeAreaView, Alert, Button} from 'react-native';
// Text 컴포넌트도 onPress 콜백 함수 설정이 가능함
// 단, 버튼이나 touchable 컴포넌트와 같은 시각 효과는 없음
import {Text} from 'react-native';

const onPress = () => Alert.alert('pressed!', 'message');

const App = () => {
  return (
    <SafeAreaView>
      <Button title="Home" onPress={onPress} />
      <Text onPress={onPress}>Press Me!</Text>
    </SafeAreaView>
  );
};

export default App;
