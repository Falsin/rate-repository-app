import { Text, Pressable } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';
const { appBar: { appBarTab } } = theme;

const AppBarTab = ({ children, path }) => {
  return (
    <Pressable style={appBarTab}>
      <Link to={path}>
        <Text style={appBarTab.text}>
          { children }
        </Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab;