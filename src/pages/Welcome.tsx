import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';

export function Welcome() {

  const [visible, setVisible] = useState(false);
  
  function hangleVisibility() {
    setVisible(! visible)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie suas plantas de forma fácil
      </Text>
      {
        visible && <Image source={wateringImg} style={styles.image}/>
      }      
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <Button title=">" onPress={hangleVisibility} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    maxWidth: 200
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  image: {
    marginHorizontal: 'auto'
  }
})