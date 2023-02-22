import { Button, Text, View } from "react-native"
import { TextInput } from "react-native-paper"

export const SplashScreen = ({ navigation }) => {
    return (
        <View>
            <Text> Formulário</Text>
            <TextInput label="Email"></TextInput> <TextInput label="Senha"></TextInput>
            <Button title='enviar' />
            <Button title="volte" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}