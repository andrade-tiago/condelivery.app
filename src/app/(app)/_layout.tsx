import { Redirect } from 'expo-router'
import { Stack } from 'expo-router/stack'

const AppLayout: React.FunctionComponent = () => {
  const login: boolean = true

  if (!login) {
    return <Redirect href={'/login'} />
  }
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="delivery-app/[id]"
      />
      <Stack.Screen
        name="delivery-chat/[id]"
        options={{ headerTitle: 'Chat' }}
      />
      <Stack.Screen
        name="notifications"
        options={{ headerTitle: 'Notificações' }}
      />
      <Stack.Screen
        name="profile-edit"
        options={{ headerTitle: 'Perfil' }}
      />
    </Stack>
  )
}

export default AppLayout
