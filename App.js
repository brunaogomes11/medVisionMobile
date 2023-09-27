import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import AnaliseScreen from './src/pages/Analise';
import {useFonts, K2D_700Bold} from '@expo-google-fonts/k2d';
import CameraScreen from './src/pages/Analise/Camera';

const Stack = createNativeStackNavigator();



export default function App() {
  let [fontsLoaded] = useFonts({K2D_700Bold})
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Analise">
        <Stack.Screen name="Analise" component={AnaliseScreen} 
        options={{headerShown: false}} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: 'bold', 
    color:"#000", 
    fontSize: 18, 
    fontFamily: "K2D_700Bold"
  }
})