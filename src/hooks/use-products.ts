import products from "@/content/products"
import { useQuery } from "react-query"

const useProducts = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: () => products,
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useProducts
