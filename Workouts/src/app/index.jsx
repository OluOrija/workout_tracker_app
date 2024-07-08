import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
//import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';
import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request'

const exercisesQuery = gql`
  query exercises($muscle: String, $name: String) {
  exercises(muscle: $muscle, name: $name) {
    name
	  muscle
  }
} 
`;

const url = 'https://btncibogo.us-east-a.ibm.stepzen.net/api/exercises/graphql'


export default function ExercisesScreen() {
  const {data, isLoading, error} = useQuery({
    queryKey: ['exercises'],
    queryFn: async () => {
      return request({url, document: exercisesQuery, requestHeaders: {"Authorization": "apikey btncibogo::local.net+1000::ac6a41cf812d9aeaf7981d590dd9ed3bab11a7cf3203ea62b14393196fde699b"}});
    },
  });

  if(isLoading){
    return <ActivityIndicator/>
  }

  if(error){
    console.log(error);
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
          data={data?.exercises}
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
