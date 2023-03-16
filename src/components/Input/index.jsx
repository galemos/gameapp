import { Text, TextInput, View } from "react-native";

import { styles } from './styles'

export function Input() {
  return (
    <View>
      <Text style={styles.text}>Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Input namer"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  )
}