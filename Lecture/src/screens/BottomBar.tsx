import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30,
  iconColor = 'white';
const icons = [
  'home',
  'table-search',
  'face-profile-woman',
  'account-settings',
];

const BottomBar = () => {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));
  return <View style={[styles.view]}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center', // 자식 컴포넌트의 배치 간격 속성
    justifyContent: 'space-evenly', // 부모의 여백을 자식의 간격에 반영하는 속성
    padding: 10,
    backgroundColor: Colors.lightBlue500,
  },
});
export default BottomBar;
