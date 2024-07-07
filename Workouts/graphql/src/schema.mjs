import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); 

const ExerciseType = new GraphQLObjectType({
  name: 'Exercise',
  fields: {
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    muscle: { type: GraphQLString },
    equipment: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    instructions: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    exercises: {
      type: new GraphQLList(ExerciseType),
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        muscle: { type: GraphQLString },
        difficulty: { type: GraphQLString },
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let url = 'https://api.api-ninjas.com/v1/exercises';
        const queryParameters = [];

        if (args.name) queryParameters.push(`name=${args.name}`);
        if (args.type) queryParameters.push(`type=${args.type}`);
        if (args.muscle) queryParameters.push(`muscle=${args.muscle}`);
        if (args.difficulty) queryParameters.push(`difficulty=${args.difficulty}`);
        if (args.offset) queryParameters.push(`offset=${args.offset}`);
        if (args.limit) queryParameters.push(`limit=${args.limit}`);

        if (queryParameters.length > 0) {
          url += `?${queryParameters.join('&')}`;
        }

        return axios
          .get(url, {
            headers: { 'X-Api-Key': process.env.API_KEY },
          })
          .then((response) => response.data)
          .catch((error) => {
            throw new Error(error);
          });
      },
    },
  },
});

export default new GraphQLSchema({
    query: RootQuery,
  });
