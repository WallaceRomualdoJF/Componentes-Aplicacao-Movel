import * as React from 'react';
import { Button, View, Text, StyleSheet, Linking, Image, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



function HomeScreen({ navigation }) {
  return (
    <View style={styles.a}>
      <Text style={styles.b}>
        Home
      </Text>
      <Text style={styles.c}>
        Trabalho Telas e Componentes da Aplicação Móvel (React Native)
        {'\n'}
        Grupo: Caio Ottoni e Wallace Romualdo
      </Text>
    </View>
  );
}

function InformationScreen({ navigation }) {
  return (
    <View style={styles.a}>
      <Text style={styles.b}>
        React Native
      </Text>
      <Image
        style={styles.logo}
        source={require('@expo/snack-static/react-native-logo.png')}
        />
      <Text style={styles.c}>
        - História:
        {'\n'}
        React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.
Em 2012 Mark Zuckerberg comentou, "O maior erro que cometemos como empresa foi apostar demais em HTML5 em oposição ao nativo". Ele prometeu que o Facebook logo entregaria uma melhor experiência móvel.
Dentro do Facebook, Jordan Walke encontrou uma maneira de gerar elementos de interface do usuário para iOS a partir de um thread JavaScript em segundo plano. Eles decidiram organizar um Hackathon interno para aperfeiçoar esse protótipo para poder criar aplicativos nativos com essa tecnologia
Após meses de desenvolvimento, o Facebook lançou a primeira versão do React em 2015. Durante uma palestra técnica, Christopher Chedeau explicou que o Facebook já estava usando o React Native em produção.
        {'\n'}
        {'\n'}
       - Implementação:
        {'\n'}
        Os princípios de funcionamento do React Native são virtualmente idênticos ao ReactJs, exceto que o React Native não manipula o DOM através do Virtual DOM. Ele é executado em um processo em segundo plano (que interpreta o JavaScript escrito pelos desenvolvedores) diretamente no dispositivo final e se comunica com a plataforma nativa por meio de uma serialização, uma ponte assíncrona e em lote. O React Native não usa HTML. Em vez disso, trabalha com Javascript puro com sintaxe JSX.
      </Text>
    </View>
  );
}

function ContatoScreen({ navigation }) {
  return (
    <View style={styles.a}>
      <Text style={styles.b}>
        Caio
      </Text>
      <Button style={styles.d}
        title="Instagram"
        onPress={() => {Linking.openURL('https://www.instagram.com/caiottoni/');}}
      />
      {'\n'}
      <Text style={styles.b}>
        Wallace
      </Text>
      <Button style={styles.d}
        title="Instagram"
        onPress={() => {Linking.openURL('https://www.instagram.com/k.mbappe/');}}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Informações" component={InformationScreen} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  a: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    alignItems: 'center',
    justifyContent: 'center'
  },

  b: {
    fontFamily: 'Brush Script MT',
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  c: {
    margin: 30,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Lucida Sans Unicode'
  },

  d: {
    color: 'red',
    backgroundColor: 'red'
  },

  logo: {
    width: 60,
    height: 60,
  },

});

