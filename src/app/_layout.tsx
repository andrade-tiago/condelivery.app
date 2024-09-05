import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </>
  )
}

export default Layout
