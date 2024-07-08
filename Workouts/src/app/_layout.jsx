import { StyleSheet, Text, View } from 'react-native'
import { Stack } from "expo-router";
import { ApolloProvider } from '@apollo/client';
import client from '../api/ApolloClient';

export default function RootLayout () {
    return (
        <ApolloProvider client={client}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false, title: 'Exercises'}}/>
            </Stack> 
        </ApolloProvider>
    );
}