import restaurants from "@/content/restaurants"
import { useQuery } from "react-query"

type RestaurantOptions = {
  id: number
}

const useRestaurant = (props: RestaurantOptions) => {
  const query = useQuery({
    queryKey: ['restaurant', props.id],
    queryFn: () => restaurants.find(restaurant => restaurant.id === props.id),
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useRestaurant
