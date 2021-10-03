import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
    </SafeAreaView>
  );
};

export default App;
