import { View } from "react-native";
import Text from "./Text";

const StatParam = ({ name, val }) => {
  const transformedVal = () => {
    if (val < 1000) return val;
    return (val/1000).toFixed(val % 1000 < 100 ? 0 : 1) + 'k';
  }

  return (
    <View>
      <Text fontWeight="bold">{transformedVal()}</Text>
      <Text color="textSecondary">{name}</Text>
    </View>
  )
}

export default StatParam;