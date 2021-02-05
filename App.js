import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CreateContact from './screens/createContacts'
export default function App() {
  return (
    <View style={styles.container}>
        <CreateContact />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f8f4f4"
  },
});
