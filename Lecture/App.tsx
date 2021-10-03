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
import color from 'color';

const {width, height} = Dimensions.get('window');

// android에서 radius 속성이 있으면 borderColor가 적용되지 않는 현상
// ios에서 padding 속성이 적용되지 않는 현상
const App = () => {
  return (
    <SafeAreaView style={[styles.SafeAreaView]}>
      <Text style={[styles.text]}>os : {Platform.OS}</Text>
      <Text style={[styles.text]}>width : {width}</Text>
      <Text style={[styles.text]}>heigth : {height}</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View
        style={[
          styles.box,
          styles.border,
          {borderTopLeftRadius: 30},
          {borderBottomLeftRadius: 30},
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {backgroundColor: Colors.blue500, flex: 1, padding: 10},
  text: {
    marginBottom: 10,
    fontSize: 20,
    color: color(Colors.blue500).lighten(0.9).string(),
  },
  box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10},
  border: {borderWidth: 10, borderColor: color('black').alpha(0.3).toString()},
});

export default App;
