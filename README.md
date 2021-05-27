<div align="center">
  
<img src="https://user-images.githubusercontent.com/5429870/115583101-f773e700-a29f-11eb-8b48-4e692a0c0e7f.jpg"/>

# NLW#5 - TRILHA REACT NATIVE
### RUMO AO PRÓXIMO NÍVEL!

<img src="https://user-images.githubusercontent.com/5429870/119894513-1276ee00-bf13-11eb-90c0-15bf2fe96d8b.gif" width="400"/>


### Aplicação que ajuda o usuário a criar lembretes para regar as plantas que ele possui.

</div>

## IMPORTANTE!

Esse é um projeto proposto na trilha react native da next level week #5 da [<font color="purple">Rocketseat</font>](https://rocketseat.com.br) 🔗

## TECNOLOGIAS UTILIZADAS

1. Node
2. React Native
3. Expo
4. Typescript

## COMO RODAR A APLICAÇÃO
Para rodar a aplicação é necessário ter instalado na máquina o [NodeJS](https://nodejs.org/)

Faça o clone da aplicação: 

`git clone git@github.com:leonardokawamura/nlw-edicao-5.git`

Entre na pasta nlw-edicao-5:

`cd nlw-edicao-5`

Instale as dependências: 

`npm install`

Rode a aplicação:

`npm run start`

Será necessário também subir um servidor que irá disponibilizar o arquivo json com as informações das plantas, abra uma outra aba no seu terminal e rode o comando:

`npx json-server ./src/services/server.json --port 3333`

Também será preciso alterar o endereço de acesso a esse servidor json para que o aplicativo no seu celular possa acessar a API, altere o arquivo que se encontra dentro de: 
**src/services/api.tsx**

```
# src/services/api.tsx

const api = axios.create({
  baseURL: 'http://<ip-local-da-sua-maquina>:3333'
})

# No lugar de <ip-local-da-sua-maquina> coloque o IP da sua máquina
```



Agora acesse no seu navegador o endereço: `http://localhost:19002`

![alt](https://user-images.githubusercontent.com/5429870/119895627-61715300-bf14-11eb-8010-7ef3a8698095.png)

Instale o EXPO GO no seu celular: 

[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US) / [IOS](https://apps.apple.com/br/app/expo-go/id982107779)

Abra o aplicativo do EXPO GO no seu celular e escaneie o QR CODE, pronto! 🚀

## PARA OUTROS DESENVOLVEDORES

Criei um arquivo com anotações dos principais conceitos ensinados em cada dia de aula:  

[ANOTAÇÕES](https://github.com/leonardokawamura/nlw-edicao-5/blob/master/anotacoes.md) 📓