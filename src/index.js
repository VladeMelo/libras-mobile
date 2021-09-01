import 'react-native-gesture-handler'

import React, { useRef } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome'
import Game from './pages/Game'

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >                
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App