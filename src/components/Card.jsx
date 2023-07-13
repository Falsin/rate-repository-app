import { View } from "react-native";
import Avatar from "./Avatar";
import RepositoriesInfo from "./RepositoriesInfo";
import Text from "./Text";
import theme from "../theme";
const { card } = theme;

const Card = ({ item }) => {
  console.log("hello", card)
  return (
    <View style={card}>
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

const RepositoriesStats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <View>
        <Text>{stargazersCount}</Text>
        <Text>Stars</Text>
      </View>
      <View>
        <Text>{forksCount}</Text>
        <Text>Forks</Text>
      </View>
      <View>
        <Text>{reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View>
        <Text>{ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}

export default Card;