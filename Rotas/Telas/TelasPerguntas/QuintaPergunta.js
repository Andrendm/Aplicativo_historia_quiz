import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuintaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao2: novaPontuacao3 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao4 = novaPontuacao3+1;
    navigation.navigate('PaginaFinal', {novaPontuacao3: novaPontuacao4});
  }

  const respostaErrada = () => {
    const novaPontuacao4 = novaPontuacao3+0;
    navigation.navigate('PaginaFinal', {novaPontuacao3: novaPontuacao4});
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
            <Text style={estiloInicial.textoHeader}>Perguntas: 5 / 5</Text>
            <Text style={estiloInicial.textoHeader}>Pontos: {novaPontuacao3}</Text>
          </LinearGradient>
        </View>

        <Image source={require('../../../imagens/imagensPerguntas/imagemPergunta5.jpg')} style={estiloInicial.containerPergunta}></Image>
        <View style={estiloInicial.conteudoPergunta}>
          <Text style={estiloInicial.textoPergunta}>Quem impulsionou o inicio da revolução Francesa?</Text>
        </View>

        <View style={estiloInicial.conteudoBotoes}>
          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>a) Camponeses</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>b) Burgueses</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>c) Clero</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>d) Nobres</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>e) Exército</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default QuintaPergunta;