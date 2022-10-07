import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export type RootStackParamList = {
  Welcome: undefined;
  User: undefined;
};

const Drewer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drewer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#360733" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#e3c3e1",
          drawerActiveTintColor: "#360733",
        }}
      >
        <Drewer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome 🎉",
            drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />,
          }}
        />
        <Drewer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />,
          }}
        />
      </Drewer.Navigator>
    </NavigationContainer>
  );
}
