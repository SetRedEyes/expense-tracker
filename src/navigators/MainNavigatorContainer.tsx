import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ManageExpense } from "../screens/ManageExpense";
import { NavigationContainer } from "@react-navigation/native";
import { ExpensesOverviewBottomTabNavigator } from "./ExpensesOverviewBottomTabNavigator";
import { StackScreenName } from "../navigation/types";

const Stack = createNativeStackNavigator();

export const MainNavigatorContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={StackScreenName.EXPENSES_OVERVIEW}
          component={ExpensesOverviewBottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={StackScreenName.MANAGE_EXPENSES}
          component={ManageExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
