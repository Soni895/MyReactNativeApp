import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text}>Hello, React Native</Text> */}
      <Card/>
    </SafeAreaView>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 30,
    color: 'blue',
  },
});

export default App;
