import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.regular,
    padding: 5,
    marginHorizontal: 10,
    marginTop: 10
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} placeholderTextColor={style.color} />;
};

export default TextInput;