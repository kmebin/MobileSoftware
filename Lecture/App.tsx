import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

// style 속성에 설정되는 값은 '객체'임 -> 스타일 객체
// 바깥쪽 {} : JSX 문법, 안쪽 {} : 객체를 의미
// style 속성 값에 배열이 오면, 배열 안의 스타일 객체를 결합하여 하나의 스타일 객체로 만듦

// 1. 인라인 스타일로 적용하는 방법 -> 동적인 스타일인 경우 유리
const App = () => {
  return (
    <SafeAreaView style={[styles.SafeAreaView, {backgroundColor: 'blue'}]}>
      <Text style={[styles.text, {color: 'white'}]}>Hello World!</Text>
    </SafeAreaView>
  );
};

// 2. StyleSheet API를 사용하는 방법 -> 정적인 스타일인 경우 유리
const styles = StyleSheet.create({
  SafeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
});

export default App;
