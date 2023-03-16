import { View, TouchableOpacity, Text } from "react-native";

import { styles } from './styles'

export function Button() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de login')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          Button
        </Text>
      </TouchableOpacity>
    </View>
  )
}