import products from "@/content/products"
import { useQuery } from "react-query"

type ProductOptions = {
  id: number
}

const useProduct = (props: ProductOptions) => {
  const query = useQuery({
    queryKey: ['product', props.id],
    queryFn: () => products.find(product => product.id === props.id),
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useProduct
