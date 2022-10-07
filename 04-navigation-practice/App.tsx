import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export type RootStackParamList = {
  Welcome: undefined;
  User: undefined;
};

const BottomTab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#360733" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#360733",
        }}
      >
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
