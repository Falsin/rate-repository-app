import { TouchableOpacity } from "react-native";
import theme from "../theme";
import Text from "./Text";

const CustomButton = ({ style, title, ...props }) => {
  const buttonStyles = [
    theme.button,
    style
  ];

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      <Text fontWeight="bold" style={{color: "white"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;