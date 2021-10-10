import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native-paper';

const title = 'Content';
// flex: 0 -> 부모 컴포넌트의 높이를 나눠 갖지 않음, 자식 컴포넌트 높이를 그대로 가져감
// flex: 1 & flex: 2 -> 부모 컴포넌트의 남은 높이를 1:2 비율로 가져감
const Content = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <View style={[{flex: 0, backgroundColor: Colors.red500}]}>
        <Text>flex: 0</Text>
      </View>
      <View style={[{flex: 1, backgroundColor: Colors.green500}]}>
        <Text>flex: 1</Text>
      </View>
      <View style={[{flex: 2, backgroundColor: Colors.purple500}]}>
        <Text>flex: 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue500},
  text: {fontSize: 20, color: 'white'},
});
export default Content;
