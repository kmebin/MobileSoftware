import React from 'react';
// Platform API : 실행되는 폰의 os 정보 제공
// Dimensions API : 현재 실행된 폰의 크기 제공
import {
  Platform,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';
import {Colors} from 'react-native-paper';
import Color from 'color';

const {width, height} = Dimensions.get('window'); // 비구조화 할당 구문 사용

const App = () => {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>os : {Platform.OS}</Text>
      <Text style={[styles.text]}>width : {width}</Text>
      <Text style={[styles.text]}>heigth : {height}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // SafeAreaView는 width는 부모 그대로, height는 자식 요소의 높이로 설정됨
  SafeAreaView: {backgroundColor: Colors.blue500, height}, // 폰 높이만큼 height 변경
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).lighten(0.9).string(),
  },
});

export default App;
