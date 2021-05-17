import React from 'react';
import {  SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {  

  return (
    <SafeAreaView style={styles.container}>      
        <View style={styles.content}> 
          <Text style={styles.emoji}>
            😄
          </Text>
          <Text style={styles.title}>
            Prontinho
          </Text>
          <Text style={styles.subtitle}>
            Agora vamos começar a cuidar das suas plantinhas com miuto cuidado.
          </Text>         
          <View style={styles.footer}>
            <Button title="Começar"></Button>
          </View> 
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: ' 100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  emoji: {
    fontSize: 78
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text,
    paddingVertical: 10
  },
  footer: {
    width: '100%',
    paddingHorizontal: 75,
    marginTop: 25
  }
})