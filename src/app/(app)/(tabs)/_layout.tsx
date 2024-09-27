import Colors from "@/constants/colors"
import { Feather, Ionicons, Octicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabLayout: React.FunctionComponent = () => {
  const iconSize = 32

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: (Colors.primary[300] as string),
        tabBarInactiveTintColor: (Colors.neutral[700] as string),
        tabBarStyle: { height: 70 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-handle" size={iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="receivers"
        options={{
          title: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Feather name="box" size={iconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
export default TabLayout
