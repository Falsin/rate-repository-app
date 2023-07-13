import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
const { text } = theme;

const RepositoriesInfo = ({ title, description, language }) => {
  return (
    <View>
      <Text style={{marginBottom: 5}} fontSize="subheading" fontWeight="bold">{title}</Text>
      <Text style={{marginBottom: 5}} color="textSecondary">{description}</Text>
      <Text style={styles.language}>
        {language}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  language: {
    backgroundColor: text.colors.primary,
    flexShrink: 1,
    alignSelf: "flex-start",
    color: "white",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5
  }
})


export default RepositoriesInfo;