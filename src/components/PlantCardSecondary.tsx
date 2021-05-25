import React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { RectButton, RectButtonProps, Swipeable } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import { format } from 'date-fns'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Feather } from '@expo/vector-icons'

interface PlantProps extends RectButtonProps {
  data: {
    name: string,
    photo: string,
    dateTimeNotification: Date
  }
  handleRemove: () => void
}

export function PlantCardSecondary({ data, handleRemove, ...rest } : PlantProps) {
  return (
    <Swipeable 
      rightThreshold={80}
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View style={styles.containerButtonRemove}>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather 
                name="trash"
                size={28}
                color={colors.white}
              />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton 
        style={styles.container}
        {...rest}
      >
        <SvgFromUri uri={data.photo} width={40} height={40} />
        <Text style={styles.plantName}>{ data.name }</Text>
        <View style={styles.watered}>
          <Text style={styles.text}>Regas às</Text>
          <Text style={styles.date}>{ format(new Date(data.dateTimeNotification), 'HH:mm') }</Text>
        </View>
      </RectButton> 
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 10
  },
  plantName: {
    flex: 1,
    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.heading,
    marginLeft: 15
  },
  watered: {
    alignItems: 'flex-end',
    marginRight: 10
  },
  text: {
    color: colors.gray,
    fontFamily: fonts.text,
    fontSize: 13,
    marginBottom: 5
  },
  date: {
    color: colors.heading,
    fontFamily: fonts.text,
    fontSize: 16
  },
  buttonRemove: {
    width: 110,
    height: 65,
    backgroundColor: colors.red,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: 25
  },
  containerButtonRemove: {
    marginLeft: -30
  }
}) 