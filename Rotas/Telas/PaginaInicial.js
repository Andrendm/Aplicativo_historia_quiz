import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaginaInicial = () =>{
  const route = useRoute();
  const navigation = useNavigation();
  const {nomeUsuario} = route.params ? route.params : {};

  let [fontsLoaded] = useFonts({
    'LaLaLandBold':require('../../estilos/fontes/Seagram.ttf'),
    'SundayRomantic':require('../../estilos/fontes/Seagram.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Animatable.View animation="fadeInUp" delay={300} style={estiloInicial.conteudoPrincipal}>
      <StatusBar hidden />
      <ScrollView>
         <ImageBackground style={estiloInicial.imagemFundoLogin} source={require('../../imagens/imagemFundoTelaPrincipal.jpg')}>
            <View style={estiloInicial.headerLogin}>
              <Text style={estiloInicial.textoLogin}>PÁGINA INÍCIAL</Text>
            </View>
          </ImageBackground>

          <View style={estiloInicial.boasVindas}>
            <Text style={estiloInicial.textoBoasVindas}>Olá, seja muito bem vindo(a):</Text>
            <Text style={estiloInicial.nomeUsarioEstilo}>João Victor Alexandre Almeida</Text>
          </View>

          <View style={estiloInicial.procurarConteudo}>
            <TextInput
              placeholder="O que quer buscar hoje?"
              style={estiloInicial.inputBuscarConteudo}
              placeholderTextColor="#cccccc"
            />
            <Icon name="search" style={estiloInicial.iconeSearch} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('PrimeiraPergunta')}>
            <View style={estiloInicial.sabiaMais}>
              <LinearGradient
                    colors={["#deb575", "#855627"]}
                    style={estiloInicial.saibaMaisContainer}
                  >
                  <Text style={estiloInicial.textoSaibaMais}>Saiba Mais Sobre o nosso Quiz</Text>
                  <Text style={estiloInicial.descricaoSaibaMais}>Descubra tudo sobre o nosso Quiz! Clique no botão e mergulhe em um mundo de conhecimento e diversão. Prepare-se para desafios emocionantes e aproveite uma experiência única. Não perca essa oportunidade!</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </Animatable.View>
  );
}

export default PaginaInicial;