import { GraphQLClient } from "graphql-request";

const url = 'https://btncibogo.us-east-a.ibm.stepzen.net/api/exercises/graphql';

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient(url, {
    headers: {
        Authorization: 'apikey btncibogo::local.net+1000::ac6a41cf812d9aeaf7981d590dd9ed3bab11a7cf3203ea62b14393196fde699b'
    },
});

export default client;
