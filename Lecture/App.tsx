import React from 'react';
import {StyleSheet, SafeAreaView, ImageBackground, Image} from 'react-native';
import {createAvatarUrl} from './util/createAvatarUrl';

const avatarUrl = createAvatarUrl();
const avatarSize = 50;
const App = () => {
  return (
    <SafeAreaView style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require('./assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  imageBackground: {padding: 10},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
});

export default App;
