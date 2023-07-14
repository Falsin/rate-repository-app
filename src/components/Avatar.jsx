import { Image } from "react-native";
import theme from "../theme";
const  { card: { avatar } } = theme;

const Avatar = (props) => {
  return <Image
    source={{
      ...avatar,
      ...props
    }}
    style={{
      marginRight: 10
    }}
  />
}

export default Avatar;