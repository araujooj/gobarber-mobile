import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import Routes from './routes'

const App: React.FC = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#312e38" />
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </>
    )
}

export default App;