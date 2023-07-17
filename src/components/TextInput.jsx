import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    theme.input,
    error && {borderColor: theme.colors.error},
    style
  ];

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholderTextColor={style.color}
      {...props}
    />
  );
};

export default TextInput;