import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home';
import { View } from 'react-native';
import OfflinePlay from './components/Offline-Multiplayer/OfflinePlay';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Offline Multiplayer" component={OfflinePlay} options={{
          headerStyle: {
            backgroundColor: '#1d1d1d', // Set the background color of the header
          },
          headerTintColor: 'aqua', // Set the color of the header text/buttons
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}