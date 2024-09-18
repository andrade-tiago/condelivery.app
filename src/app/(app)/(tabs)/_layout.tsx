import Colors from "@/constants/colors"
import { Octicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabLayout: React.FunctionComponent = () => {
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
            <Octicons name="home" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
export default TabLayout
