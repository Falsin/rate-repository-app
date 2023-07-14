import { View } from "react-native";
import Avatar from "./Avatar";
import RepositoriesInfo from "./RepositoriesInfo";
import theme from "../theme";
import RepositoriesStats from "./RepositoriesStats";
const { card } = theme;

const Card = ({ item }) => {
  return (
    <View style={{...card, backgroundColor: "white"}}>
      <View style={{flexDirection: "row"}}>
        <Avatar uri={item.ownerAvatarUrl} />
        <RepositoriesInfo
          title={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>

      <RepositoriesStats
        stargazersCount={item.stargazersCount}
        forksCount={item.forksCount}
        reviewCount={item.reviewCount}
        ratingAverage={item.ratingAverage}
      />
    </View>
  )
}

export default Card;