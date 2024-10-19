import requests from "@/content/requests"
import { useQuery } from "react-query"

const useRequests = () => {
  const query = useQuery({
    queryKey: ['requests'],
    queryFn: () => requests,
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useRequests
