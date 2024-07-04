import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from "expo-router";


SplashScreen.preventAutoHideAsync();


export default function RootLayout () {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false, title: 'Exercises'}}/>
        </Stack>
    );
}