import Constants from 'expo-constants';
import { Platform } from 'react-native';

const theme = {
  colors: {
    regular: '#ACACAC',
    error: '#d73a4a'
  },
  text: {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      regular: '#ACACAC'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: "Roboto",
        ios: "Arial",
        default: "System"
      })
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  },
  appBar: {
    backgroundColor: "#24292e",
    padding: 15,
    paddingTop: Constants.statusBarHeight,

    appBarTab: {
      marginRight: 10,
      text: {
        color: "white",
      }
    }
  },
  card: {
    marginBottom: 5,
    padding: 10,

    avatar: {
      width: 50,
      height: 50,
    }
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    borderColor: '#ACACAC',
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#0366d6',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  }
};

export default theme;