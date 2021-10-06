import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Text,
  Alert,
} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // 아이콘 컴포넌트 사용하기 위함
import {createAvatarUrl} from './util/createAvatarUrl';

const avatarUrl = createAvatarUrl();
const avatarSize = 50;
const text = 'Almost before we knew it, we had left the ground';
const onIconPressed = () => Alert.alert('icon pressed');

const App = () => {
  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex, styles.padding10]}
        source={require('./assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <View style={[styles.flex, styles.padding10]}>
          <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
          <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
          <Text style={[styles.text, styles.semiBold]}>{text} [semi bold]</Text>
          <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
        </View>
        <Icon
          name="home"
          size={50}
          color={Colors.lightBlue500}
          onPress={onIconPressed}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  padding10: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},

  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
  bold: {
    fontFamily: 'DancingScript-Bold',
    fontWeight: Platform.select({ios: '700', android: '600'}), // android에서는 weight '700'이 적용되지 않음
  },
});

export default App;
