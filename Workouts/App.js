import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './src/components/ExerciseListITem';


export default function App() {
  const exercise = exercises[1];

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
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70
  }
});
