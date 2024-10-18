import queryClient from '@/services/query-client'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { QueryClientProvider } from 'react-query'

const Layout: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </QueryClientProvider>
  )
}

export default Layout
