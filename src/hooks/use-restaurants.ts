import restaurants from "@/content/restaurants"
import { useQuery } from "react-query"

const useRestaurants = () => {
  const query = useQuery({
    queryKey: ['restaurants'],
    queryFn: () => restaurants,
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useRestaurants
