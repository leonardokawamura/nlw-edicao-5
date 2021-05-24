import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import userImg from '../assets/pp.jpg';
import fonts from '../styles/fonts';

export function Header() {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStorageUserName() {
      const userName = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(userName || '')
    }
    loadStorageUserName()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{ userName }</Text>
      </View>
      <Image source={userImg} style={styles.userImage} />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text    
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 36
  },
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 50
  }
})