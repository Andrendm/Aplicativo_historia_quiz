import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInical from './Rotas/Telas/TelaInicial';
import PaginaLogin from './Rotas/Telas/PaginaLogin';
import PaginaCadastro from './Rotas/Telas/PaginaCadastro';
import PaginaInicial from './Rotas/Telas/PaginaInicial';


import PrimeiraPergunta from './Rotas/Telas/TelasPerguntas/PrimeiraPergunta';
import SegundaPergunta from './Rotas/Telas/TelasPerguntas/SegundaPergunta';
import TerceiraPergunta from './Rotas/Telas/TelasPerguntas/TerceiraPergunta';
import QuartaPergunta from './Rotas/Telas/TelasPerguntas/QuartaPergunta';
import QuintaPergunta from './Rotas/Telas/TelasPerguntas/QuintaPergunta';
import PaginaFinal from './Rotas/Telas/TelasPerguntas/PaginaResultado';

const App = () =>{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PaginaFinal" component={PaginaFinal}/>
      <Stack.Screen name="PaginaInicial" component={PaginaInicial}/>
        <Stack.Screen name="TelaInical" component={TelaInical}/>
        <Stack.Screen name="PaginaLogin" component={PaginaLogin}/>
        <Stack.Screen name="PaginaCadastro" component={PaginaCadastro}/>
        <Stack.Screen name="PrimeiraPergunta" component={PrimeiraPergunta}/>
        <Stack.Screen name="SegundaPergunta" component={SegundaPergunta}/>
        <Stack.Screen name="TerceiraPergunta" component={TerceiraPergunta}/>
        <Stack.Screen name="QuartaPergunta" component={QuartaPergunta}/>
        <Stack.Screen name="QuintaPergunta" component={QuintaPergunta}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;