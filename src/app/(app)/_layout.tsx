import { Redirect } from 'expo-router'
import { Stack } from 'expo-router/stack'

const AppLayout: React.FunctionComponent = () => {
  const login: boolean = true

  if (!login) {
    return <Redirect href={'/login'} />
  }
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}

export default AppLayout
