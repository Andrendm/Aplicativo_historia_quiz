import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaginaFinal = () =>{
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao3: novaPontuacao4 } = route.params ? route.params : {};

  var mensagemResultado = [];

  if(novaPontuacao4 == 0){
    mensagemResultado = "Se você não conseguiu acertar nenhuma questão, não desanime! Continue explorando o encantador mundo de La La Land e tente novamente.";
  }else if(novaPontuacao4 == 1 || novaPontuacao4 == 2){
    mensagemResultado = "Quase lá! Com um pouco mais de conhecimento, você estará dominando o universo de La La Land. Continue se envolvendo com o filme e tente novamente!";
  }else if(novaPontuacao4 == 3 || novaPontuacao4 == 4){
    mensagemResultado = "Parabéns! Seu conhecimento sobre o filme La La Land é impressionante. Continue explorando esse mundo cinematográfico e aprofundando sua expertise.";
  }else if(novaPontuacao4 == 5){
    mensagemResultado = "Uau! Você realmente sabe tudo sobre o filme La La Land. Seu conhecimento é digno de um verdadeiro fã. Continue se encantando com essa obra cinematográfica!";
  }
  
  let [fontsLoaded] = useFonts({
    'LaLaLandBold':require('../../../estilos/fontes/Seagram.ttf'),
    'SundayRomantic':require('../../../estilos/fontes/Seagram.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Animatable.View animation="fadeInUp" delay={300} style={estiloInicial.conteudoPrincipal}>
      <StatusBar hidden />
      <ImageBackground style={estiloInicial.imagemFundo} source={require('../../../imagens/imagemBakcground.jpeg')}>
        <View style={estiloInicial.conteudoResultado}>
          <Text style={estiloInicial.textoResultado}>A SUA PONTUAÇÃO FINAL NO QUIZ FOI DE: {novaPontuacao4} PONTOS!</Text>
          <Text style={estiloInicial.descricaoResultado}>{mensagemResultado}</Text>

          <TouchableOpacity onPress={() => navigation.navigate('PaginaInicial')} style={estiloInicial.btnInicio}>
            <LinearGradient
              colors={["#321e7c", "#08063a"]}
              style={estiloInicial.colorsBtnTentarDenovo}
            >
              <Text style={estiloInicial.textoTentarNovamente}>CLIQUE PARA TENTAR NOVAMENTE</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animatable.View>
  );
}

export default PaginaFinal;