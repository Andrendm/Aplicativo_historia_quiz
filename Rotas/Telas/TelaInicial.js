import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const TelaInical = () =>{
  
  let [fontsLoaded] = useFonts({
    'LaLaLandBold':require('../../estilos/fontes/Seagram.ttf'),
    'SundayRomantic':require('../../estilos/fontes/Seagram.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  const navigation = useNavigation(); 

  return(
    <Animatable.View animation="fadeInUp" delay={300} style={estiloInicial.conteudoPrincipal}>
      <StatusBar hidden />
      <ImageBackground style={estiloInicial.imagemFundo} source={require('../../imagens/imagemBakcground.jpeg')}>
        <View style={estiloInicial.titulosConteudo}>
          <Text style={estiloInicial.textoPrincipal}>MUNDO HISTÓRICO QUIZ</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PaginaLogin')} style={estiloInicial.btnInicio}>
            <LinearGradient
              colors={["#deb575", "#855627"]}
              style={estiloInicial.colorsBtn}
            >
              <Text style={estiloInicial.textoInicio}>CLIQUE PARA COMECAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animatable.View>
  );
}

export default TelaInical;