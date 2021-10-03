import React from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text, {color: 'white'}]}>os : {Platform.OS}</Text>
      <Text style={[styles.text, {color: 'yellow'}]}>width : {width}</Text>
      <Text style={[styles.text, {color: 'orange'}]}>heigth : {height}</Text>

      <View style={[styles.box, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border,{borderRadius: 20}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Platform.select를 사용하여 os마다 다른 값을 적용
  SafeAreaView: {
    backgroundColor: Colors.blue500,
    flex: 1,
    paddingLeft: Platform.select({ios: 0, android: 20}),
  },
  text: {fontSize: 20, marginVertical: 20, marginLeft: 30},
  box: {
    width: '70%',
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: Platform.select({ios: 20, android: 0}), // ios는 padding 대신 margin을 줌
  },
  border: {borderWidth: 10, borderColor: Colors.lime500},
});

export default App;
