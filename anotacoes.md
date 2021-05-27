### 1️⃣ PRIMEIRO DIA

[Documentação](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)

```
// custom.d.ts

declare module '*.png' {
  const content: any;
  export default content;
}
```

### 2️⃣ SEGUNDO DIA

#### 🏷️ COMO USAR ICONES DO EXPO

Pacote de icones do expo [🔗(link da documentação)](https://docs.expo.io/guides/icons/)

link para pesquisar todos os ícones: 🔗[link](https://icons.expo.fyi/)

`expo install @expo/vector-icons`

Exemplo de uso:

```
import { Feather } from '@expo/vector-icons';

<Feather name="chevron-right"/>
```

#### 🏷️ COMO USAR GOOGLE FONTS

Pacote para usar fonts do google [🔗(link da documentação)](https://docs.expo.io/guides/using-custom-fonts/)

`expo install expo-font @expo-google-fonts/<nome da fonte>`

#### 🏷️ APP LOADING

Pacote para tela de loading do app

`expo install expo-app-loading`

Exemplo de uso, aguardando o carregamento de fontes externas:

```
import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  )
}
```

#### 🏷️ NAVEGAÇÃO ENTRE AS PÁGINAS

Pacote para navegação entre as páginas [🔗(link da documentação)](https://reactnavigation.org/)

```
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view 
npm install @react-navigation/stack
```
Estrutura básica para usar a navegação

```
### src/routes/stack.routes.txs

import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;

### src/routes/index.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';

const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
)

export default Routes;

### App.tsx

import Routes from './src/routes';

export default function App() {
  ...  
  return (
    <Routes />
  )
}
```
Usando a navegação dentro das páginas

```
### src/pages/Welcome.txs

import { useNavigation } from '@react-navigation/core';

const navigation = useNavigation();

function handleStart() {
  navigation.navigate('UserIdentification');
}

return (
  ...
  <Button onPress={handleStart}></Button>
)
```

### 3️⃣ TERCEIRO DIA

#### 🏷️ NOTCH DO IPHONE

Pacote para ajudar com o espaço ocupado pelo notch no iphone

`npm i react-native-iphone-x-helper --save`

#### 🏷️ JSON SERVER

Pacote para criar uma api fake [🔗(link da documentação)](https://github.com/typicode/json-server)

`npm i -g json-server`

```
### Como usar no terminal

json-server <caminho até o arqiuvo .json> --host <ip da máquina> --port <porta>

### Exemplo:

json-server ./src/services/server.json --host 192.168.15.12 --port 3333
```

#### 🏷️ COMO USAR SVG

[🔗 Documentação](https://docs.expo.io/versions/latest/sdk/svg/)

`expo install react-native-svg`

Exemplo de uso:

```
import { SvgFromUri } from 'react-native-svg'

<SvgFromUri uri={uri}/>
```

#### 🏷️ SITE COM ANIMAÇÕES DE CARREGAMENTO

[🔗 https://lottiefiles.com](https://lottiefiles.com/)

[🔗 Documentação do expo lottie](https://docs.expo.io/versions/latest/sdk/lottie/)

`expo install lottie-react-native`

Exemplo de uso:

```
import LottieView from 'lottie-react-native'
import loadAnimation from '../assets/load.json' // arquivo baixado no site lottiefiles.com

<LottieView 
  source={loadAnimation}
  autoPlay
  loop
  style={styles.animation}
/>
```

### 4️⃣ QUARTO DIA

#### 🏷️ ASYNC STORAGE

[🔗 Documentação do expo async storage](https://docs.expo.io/versions/latest/sdk/async-storage/)

`expo install @react-native-async-storage/async-storage`

Exemplo de uso:

```
import AsyncStorage from '@react-native-async-storage/async-storage'

AsyncStorage.setItem('@plantmanager:user', name)
```

Padrão para nomear a chave que irá armazenar o valor: `@<nome-do-app>:<chave>`

Exemplo: @plantmanager:user

#### 🏷️ PASSANDO PARÂMETROS ENTRE AS TELAS

Passando os parâmetros:

```
navigation.navigate('<page-name>', { <params> });
```

Capturando os parâmetros passados:

```
import { useRoute } from '@react-navigation/core'

const route = useRoute()
const { <param> } = route.params
```

#### 🏷️ DATE TIME PICKER

[🔗 Documentação do expo date time picker](https://docs.expo.io/versions/latest/sdk/date-time-picker/)

`expo install @react-native-community/datetimepicker`

Exemplo de uso:

```
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

<DateTimePicker 
  value=
  mode="time"
  display="spinner"
  onChange=
/>
```

#### 🏷️ DATE FNS

Biblioteca para trabalhar com datas

[🔗 Documentação do date-fns](https://date-fns.org/docs/Getting-Started)

`npm install date-fns --save`

Exemplo de uso:

```
format(new Date(), 'HH:mm')
format(new Date(2014, 1, 11), 'MM/dd/yyyy')
isBefore(date, dateToCompare)
```

#### 🏷️ TAB NAVIGATION

[🔗 Documentação do react navigation](https://reactnavigation.org/docs/tab-based-navigation)

`npm install @react-navigation/bottom-tabs`

Exemplo de uso:

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: ,
        inactiveTintColor: ,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 20,
          height: 80
        }
      }}
    >
      <AppTab.Screen 
        name="Nova Planta"
        component={}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />

    </AppTab.Navigator>
  )
}

export default AuthRoutes
```

### 5️⃣ QUINTO DIA

#### 🏷️ SWIPEABLE

[🔗 Documentação do swipeable](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable/)

Exemplo de uso:

```
import {Swipeable } from 'react-native-gesture-handler'

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

```

#### 🏷️ NOTITICATIONS

[🔗 Documentação do expo notifications](https://docs.expo.io/versions/latest/sdk/notifications/)

`expo install expo-notifications`

Exemplo de uso:

```
import * as Notifications from 'expo-notifications'

const notificationId = await Notifications.scheduleNotificationAsync({
  content: {
    title: 'Heeey, 🌱',
    body: `Está na hora de cuidar da sua ${plant.name}`,
    sound: true,
    priority: Notifications.AndroidNotificationPriority.HIGH,
    data: {
      plant
    }
  },
  trigger: {
    seconds: seconds < 60 ? 60 : seconds,
    repeats: true
  }
})
```

#### 🏷️ CATÁLOGO DE EMOJIS

[🔗 Site do catálogo de emojis](https://emojipedia.org/)