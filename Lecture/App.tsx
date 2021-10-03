import React from 'react';
import {SafeAreaView, Alert, Button} from 'react-native';

// Button 컴포넌트, Alert API 사용
const App = () => {
  return (
    <SafeAreaView>
      <Button
        title="Home"
        onPress={() => Alert.alert('home pressed.', 'message')}
      />
      <Button
        title="Select"
        onPress={() =>
          Alert.alert('select pressed.', 'message', [
            {
              text: 'No',
              onPress: () => {
                console.log('No');
              },
            },
            {
              text: 'Yes',
              onPress: () => {
                console.log('Yes');
              },
            },
          ])
        }
      />
    </SafeAreaView>
  );
};

export default App;
