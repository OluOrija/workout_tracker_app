import { StyleSheet, Text, View } from 'react-native';


export default function ExerciseListItem ({item}) {
    return(
      <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> |{' '}
        <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    exerciseName: {
      fontSize: 20, 
      fontWeight: '500'
    },
    exerciseSubtitle: {
      color: 'dimgray'
    },
    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
      marginHorizontal: 2,

      // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    subValue: {
      textTransform: 'capitalize',
    },
  });  