import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import Color from 'color';

const App = () => {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet World!</Text>
    </SafeAreaView>
  );
};

// Colors
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
});

export default App;
