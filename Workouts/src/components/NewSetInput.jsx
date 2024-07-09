import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

const NewSetInput = () => {
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')

  const addSet = () => {
    console.warn('Add set: ', reps, weight);

    setReps('');
    setWeight('');
  };

  return (
    <View styles={styles.container}>
      {/* <Text>Log set</Text> */}
      <TextInput value={reps} onChangeText={setReps} placeholder='Reps' style={styles.input} keyboardType='numeric'/>
      <TextInput value={weight} onChangeText={setWeight} placeholder='Weight' style={styles.input} keyboardType='numeric'/>   
      <Button title='Add' onPress={addSet}/>   
    </View>
  )
}

export default NewSetInput

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      gap: 5,
    },
    row: {
      flexDirection: 'row',
      gap: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gainsboro',
      padding: 10,
      flex: 1,
      borderRadius: 5,
    },
  });