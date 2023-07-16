import Constants from 'expo-constants';

const theme = {
  colors: {
    regular: '#ACACAC'
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
      main: 'System',
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
  }
};

export default theme;