import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './screens/profile'
export default function App() {
  return (
    <View style={styles.container}>
        <Profile name="Wajiha" phone="07932565677" email="Wajihaniazi@gmail.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
