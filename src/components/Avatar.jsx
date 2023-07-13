import { Image } from "react-native";
import theme from "../theme";
const  { card: { avatar } } = theme;

const Avatar = (props) => {
  return <Image source={{
    ...avatar,
    ...props
  }} />
}

export default Avatar;