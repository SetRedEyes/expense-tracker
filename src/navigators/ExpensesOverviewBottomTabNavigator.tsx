import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { RecentExpenses } from "../screens/RecentExpenses";
import { AllExpenses } from "../screens/AllExpenses";
import { BottomTabScreenName } from "../navigation/types";

const BottomTabs = createBottomTabNavigator();

export const ExpensesOverviewBottomTabNavigator = () => {
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
        name={BottomTabScreenName.RECENT_EXPENSES}
        component={RecentExpenses}
        options={recentExpensesScreenOptions}
      />
      <BottomTabs.Screen
        name={BottomTabScreenName.ALL_EXPENSES}
        component={AllExpenses}
        options={allExpensesScreenOptions}
      />
    </BottomTabs.Navigator>
  );
};
