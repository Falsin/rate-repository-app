import { View } from "react-native";
import StatParam from "./StatItem";

const RepositoriesStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <StatParam val={stargazersCount} name='Stars' />
      <StatParam val={forksCount} name='Forks' />
      <StatParam val={reviewCount} name='Reviews' />
      <StatParam val={ratingAverage} name='Rating' />
    </View>
  )
}

export default RepositoriesStats;