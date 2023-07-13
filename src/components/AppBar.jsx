import { View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
const { appBar } = theme;

const AppBar = () => {
  return (
    <View style={appBar}>
      <AppBarTab>
        Repositories
      </AppBarTab>
    </View>
  )
}

export default AppBar;