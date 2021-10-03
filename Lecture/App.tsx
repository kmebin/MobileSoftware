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

const {width, height} = Dimensions.get('window');

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
  // flex 스타일 속성
  SafeAreaView: {backgroundColor: Colors.blue500, flex: 1}, // height: '100%'와 동일한 값
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).lighten(0.9).string(),
  },
});

export default App;
