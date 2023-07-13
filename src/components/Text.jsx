import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';
const { text } = theme;

const styles = StyleSheet.create({
  text: {
    color: text.colors.textPrimary,
    fontSize: text.fontSizes.body,
    fontFamily: text.fonts.main,
    fontWeight: text.fontWeights.normal,
  },
  colorTextSecondary: {
    color: text.colors.textSecondary,
  },
  colorPrimary: {
    color: text.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: text.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: text.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;