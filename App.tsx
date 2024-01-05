import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ManageExpense } from "./src/screens/ManageExpense";
import { AllExpenses } from "./src/screens/AllExpenses";
import { RecentExpenses } from "./src/screens/RecentExpenses";
import { COLORS } from "./src/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  const bottomTabScreenOptions: BottomTabNavigationOptions = {
    headerStyle: { backgroundColor: COLORS.primary500 },
    headerTintColor: "white",
    tabBarStyle: { backgroundColor: COLORS.primary500 },
    tabBarActiveTintColor: COLORS.accent500,
  };

  const recentExpensesScreenOptions: BottomTabNavigationOptions = {
    title: "Recent Expenses",
    tabBarLabel: "Recent",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name='hourglass' size={size} color={color} />
    ),
  };

  const allExpensesScreenOptions: BottomTabNavigationOptions = {
    title: "All Expenses",
    tabBarLabel: "All Expenses",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name='calendar' size={size} color={color} />
    ),
  };

  return (
    <BottomTabs.Navigator screenOptions={bottomTabScreenOptions}>
      <BottomTabs.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={recentExpensesScreenOptions}
      />
      <BottomTabs.Screen name='AllExpenses' component={AllExpenses} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
