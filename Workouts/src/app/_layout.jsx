import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from "expo-router";


SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false, title: 'Exercises'}}/>
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})