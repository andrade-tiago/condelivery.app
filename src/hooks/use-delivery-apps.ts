import deliveryApps from "@/content/delivery-apps"
import { useQuery } from "react-query"

const useDeliveryApps = () => {
  const query = useQuery({
    queryKey: ['delivery-apps'],
    queryFn: () => deliveryApps,
  })

  return {
    items: query.data,
    isLoading: query.isFetching,
  }
}
export default useDeliveryApps
