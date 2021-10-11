import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Carousel from './src/Carousel';



export default function App() {
  return (
     <View style={styles.container}>
    <ScrollView style={{flex: 1}}>
      
      <Carousel />
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
