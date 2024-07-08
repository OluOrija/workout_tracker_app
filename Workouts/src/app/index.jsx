import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
//import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';
import { gql, useQuery } from '@apollo/client';
// const url = 'http://localhost:4000/graphql'
//const url = 'http://192.168.112.1:4000/graphql'
const url = 'http://localhost:4000/graphql'



const GET_EXERCISES = gql`
  query GetExercises($name: String, $type: String, $muscle: String, $difficulty: String, $limit: Int) {
    exercises(name: $name, type: $type, muscle: $muscle, difficulty: $difficulty, limit: $limit) {
      name
      type
      muscle
      equipment
      difficulty
      instructions
    }
  }
`;


export default function ExercisesScreen() {
  const { loading, error, data } = useQuery(GET_EXERCISES, {
    variables: { name: "push-up", type: "strength", muscle: "chest", difficulty: "beginner", limit: 5 },
  });

  if(loading){
    return <ActivityIndicator/>
  }

  if(error){
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }
  //const exercise = exercises[1];
  const exercises = data?.exercises;

  return (
    <View style={styles.container}>
      <FlatList
          data={exercises}
          contentContainerStyle={{gap: 10}}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item}) => <ExerciseListItem item={item}/>}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  }
});
