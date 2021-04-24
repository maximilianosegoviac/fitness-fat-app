import 'react-native-gesture-handler'

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Navegación
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

//screens
import Home from './screens/Home';
import Detalle from './screens/Detalle';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                    
                },
                headerTitleAlign: 'center',
                headerTintColor: "#000",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
          >

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Fitness Fat"}}
               
            />
            <Stack.Screen
                name="Detalle"
                component={Detalle}
                options={{ title: "Fitness Fat", headerBackTitle: 'Atrás'}}
               
            />
           

          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

