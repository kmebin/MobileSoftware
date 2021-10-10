import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createPerson} from '../../util/createPerson';

const data = createPerson();

const TopBar = () => {
  return (
    <View style={[styles.view]}>
      <Image style={[styles.avatar]} source={{uri: data.avatarUrl}} />
      <View style={[styles.centerView]}>
        <Text style={[styles.text]}>{data.name}</Text>
      </View>
      <Icon name="menu" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.amber500,
  },
  text: {fontSize: 20, textAlign: 'center'},
  avatar: {width: 40, height: 40, borderRadius: 20},
  centerView: {flex: 1}, // Text에는 flex 속성을 부여할 수 없어서, 감쌀 수 있는 View 만듦
});

export default TopBar;
