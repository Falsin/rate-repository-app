import { View, Pressable, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";


const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white"
  },
  input: {
    color: theme.text.colors.regular
  }
})

const SignInFormLayout = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Pressable onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInFormLayout;