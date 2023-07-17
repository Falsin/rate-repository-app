import { View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import CustomButton from "./CustomButton";


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white"
  },
  input: {
    marginBottom: 8
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
      <CustomButton
        title="Sign in"
        onPress={onSubmit}
      />
    </View>
  )
}

export default SignInFormLayout;