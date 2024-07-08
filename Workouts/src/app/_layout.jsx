import { StyleSheet, Text, View } from 'react-native'
import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

export default function RootLayout () {
    return (
        <QueryClientProvider client={client}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false, title: 'Exercises'}}/>
            </Stack> 
        </QueryClientProvider>
    );
}