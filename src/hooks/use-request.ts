import requests from "@/content/requests"
import { useQuery } from "react-query"

type RequestOptions = {
  id: number
}

const useRequest = (props: RequestOptions) => {
  const query = useQuery({
    queryKey: ['request', props.id],
    queryFn: () => requests.find(request => request.id === props.id),
  })

  return {
    data: query.data,
    isLoading: query.isFetching,
  }
}
export default useRequest
