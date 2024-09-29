import useLoginStore from '@/store/login'
import { Redirect } from 'expo-router'
import { Stack } from 'expo-router/stack'

const AppLayout: React.FunctionComponent = () => {
  const loginStore = useLoginStore()

  if (!loginStore.logged) {
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
      <Stack.Screen
        name="saved-cards"
        options={{ headerTitle: 'Cartões salvos' }}
      />
    </Stack>
  )
}

export default AppLayout
