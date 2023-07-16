import { ScrollView, View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';
const { appBar } = theme;

const AppBar = () => {
  return (
    <View style={appBar}>
      <ScrollView horizontal>
        <AppBarTab path="/">
          Repositories
        </AppBarTab>
        <AppBarTab path="/sign-in">
          Sign-in
        </AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar;