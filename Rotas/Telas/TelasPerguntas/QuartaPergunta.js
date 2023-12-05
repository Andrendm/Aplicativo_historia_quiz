import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuartaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao: novaPontuacao2 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao3 = novaPontuacao2+1;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

  const respostaErrada = () => {
    const novaPontuacao3 = novaPontuacao2+0;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

   let [fontsLoaded] = useFonts({
    'LaLaLandBold':require('../../../estilos/fontes/Seagram.ttf'),
    'SundayRomantic':require('../../../estilos/fontes/Seagram.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
      <View style={estiloInicial.conteudoPrincipal}>
        <StatusBar hidden />
        <View style={estiloInicial.headerPerguntas}>
          <LinearGradient
            colors={["#deb575", "#855627"]}
            style={estiloInicial.headerPerguntasContainer}
          >
            <Text style={estiloInicial.textoHeader}>Perguntas: 4 / 5</Text>
            <Text style={estiloInicial.textoHeader}>Pontos: {novaPontuacao2}</Text>
          </LinearGradient>
        </View>

        <Image source={require('../../../imagens/imagensPerguntas/imagemPergunta4.jpg')} style={estiloInicial.containerPergunta}></Image>
        <View style={estiloInicial.conteudoPergunta}>
          <Text style={estiloInicial.textoPergunta}>Qual foi o primeiro nome dado ao Brasil?</Text>
        </View>

        <View style={estiloInicial.conteudoBotoes}>
          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>a) Ilha de Vera Cruz</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>b) Terra de Santa Cruz</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>c) Pindorama</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>d) Terra Nova</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>e) Terra dos Papagaios</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default QuartaPergunta;