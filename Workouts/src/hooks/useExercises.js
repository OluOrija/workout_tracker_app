import { useQuery } from 'react-query';
import { graphQLClient } from '../api/graphqlClient';
import { gql } from 'graphql-request';

const GET_EXERCISES = gql`
  query GetExercises($muscle: String) {
    exercises(muscle: $muscle) {
      name
      type
      muscle
      equipment
      difficulty
      instructions
    }
  }
`;

export const useExercises = (muscle) => {
  return useQuery(['exercises', muscle], async () => {
    const { exercises } = await graphQLClient.request(GET_EXERCISES, { muscle });
    return exercises;
  });
};
