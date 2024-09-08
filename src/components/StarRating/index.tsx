import { StyleSheet, Text, View } from "react-native"
import React, { ReactNode } from "react"
import Colors from "@/constants/colors"
import StarButton from "./StarButton"

type RatingTags = {
  [rating: number]: string,
}
const ratingTags: RatingTags = {
  1: 'Péssimo',
  2: 'Ruim',
  3: 'Regular',
  4: 'Bom',
  5: 'Ótimo',
}

const StarRating: React.FunctionComponent = () => {
  const [rating, setRating] = React.useState<number>(0)

  const starButtons: ReactNode = Array.from({ length: 5 }).map((_, i) => {
    const value = i + 1

    return (
      <StarButton
        key={i}
        active={rating >= value}
        onPress={() => setRating(value)}
      />
    )
  })

  return (
    <View style={styles.container}>
      <Text style={styles.ratingTag}>
        {ratingTags[rating]}
      </Text>

      <View style={styles.stars}>
        {starButtons}
      </View>
    </View>
  )
}
export default StarRating

const styles = StyleSheet.create({
  container: {
    gap: 12,
    alignItems: 'center',
    width: '100%',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ratingTag: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary[300],
  },
})
