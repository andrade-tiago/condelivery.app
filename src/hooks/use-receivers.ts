import receivers from "@/content/receivers"
import { useQuery } from "react-query"

const useReceivers = () => {
  const query = useQuery({
    queryKey: ['receivers'],
    queryFn: () => receivers,
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useReceivers
