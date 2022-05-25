import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Facebook from './src/Facebook';
import Google from './src/Google';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Firebase Sign</Text>
      <Facebook />
      <Google/>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {textAlign: 'center', margin: 20, fontSize: 30, color: 'black'},
});
export default App;
