import { Text, View, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { styles } from './styles'

export function Login() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de signUp')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Game</Text>
      <Input />
      <Input />
      <Button />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          SignUp
        </Text>
      </TouchableOpacity>
      <Text style={styles.breakLine}>or</Text>

      <Button />
      <Button />
      <Button />
    </View>
  )
}