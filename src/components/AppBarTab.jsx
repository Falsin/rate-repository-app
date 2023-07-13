import { Text, Pressable } from 'react-native';
import theme from '../theme';
const { appBar: { appBarTab } } = theme;

const AppBarTab = ({children}) => {
  return (
    <Pressable style={appBarTab}>
      <Text style={appBarTab.text}>
        { children }
      </Text>
    </Pressable>
  )
}

export default AppBarTab;