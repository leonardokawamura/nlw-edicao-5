### PRIMEIRO DIA

[Documentação](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html)

```
// custom.d.ts

declare module '*.png' {
  const content: any;
  export default content;
}
```

### SEGUNDO DIA

#### COMO USAR ICONES DO EXPO

Pacote de icones do expo [🔗(link da documentação)](https://docs.expo.io/guides/icons/)

link para pesquisar todos os ícones: 🔗[link](https://icons.expo.fyi/)

`expo install @expo/vector-icons`

Exemplo de uso:

```
import { Feather } from '@expo/vector-icons';

<Feather name="chevron-right"/>
```

#### COMO USAR GOOGLE FONTS

Pacote para usar fonts do google [🔗(link da documentação)](https://docs.expo.io/guides/using-custom-fonts/)

`expo install expo-font @expo-google-fonts/<nome da fonte>`

#### APP LOADING

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

#### NAVEGAÇÃO ENTRE AS PÁGINAS

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
