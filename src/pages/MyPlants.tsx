import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Alert } from 'react-native'
import { Header } from '../components/Header'
import { loadPlants, PlantProps, removePlant } from '../libs/storage'
import { PlantCardSecondary } from '../components/PlantCardSecondary'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Load } from '../components/Load'

import waterdrop from '../assets/waterdrop.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function MyPlants() {
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await removePlant(plant)
            setPlants((oldPlants) => {
              return oldPlants.filter((item) => item.id !== plant.id)
            })
          } catch (error) {
            Alert.alert('Infelizmente houve um erro na remoção dessa planta, tente novamente!')
          }
        }
      }
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        const plantsStoraged = await loadPlants()
        const nextTime = formatDistance(
          new Date(plantsStoraged[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          { locale: pt}
        )
        setPlants(plantsStoraged)
        setNextWatered(
          `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas`
        )
        setLoading(false)
      } catch (error) {
        setLoading(false)
        Alert.alert('Não foi possível carregas as suas plantas! 😭')
      }      
    }

    loadStorageData()
  }, [])

  if(loading) {
    return <Load />
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} width={56} height={56} />
        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas
        </Text>
        {
          plants.length > 1 
          ?
          <FlatList
            data={plants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlantCardSecondary data={ item } handleRemove={() => handleRemove(item)} />
            )}           
            showsVerticalScrollIndicator={false}
          /> 
          :
          <Text style={styles.noNextPlantText}>Você não possui outras plantas para regar</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    marginVertical: 25
  },
  spotlightText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'left'
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading
  },
  noNextPlantText: {
    marginTop: 25
  }
})