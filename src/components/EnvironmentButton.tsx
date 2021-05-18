import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string,
  active?: boolean
}

export function EnvironmentButton({ title, active = false, ...rest }: EnvironmentButtonProps) {
  return (
    <RectButton 
      style={[
        styles.container,
        active && styles.containerActive
      ]} 
      {...rest}
    >
      <Text 
        style={[
          styles.text,
          active && styles.textActive
        ]}
      >
        { title }
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    borderRadius: 12,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginRight: 5
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    fontSize: 13,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 23
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  }
})