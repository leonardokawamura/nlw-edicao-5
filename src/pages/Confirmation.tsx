import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {  
  const navigation = useNavigation()
  const routes = useRoute()
  const {title, subtitle, buttonTitle, icon, nextScreen} = routes.params as Params

  function handleNextPage() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>      
        <View style={styles.content}> 
          <Text style={styles.emoji}>
            {emojis[icon]}
          </Text>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>         
          <View style={styles.footer}>
            <Button title={buttonTitle} onPress={handleNextPage}></Button>
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