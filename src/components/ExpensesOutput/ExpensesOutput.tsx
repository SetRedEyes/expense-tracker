import { View } from "react-native";
import { ExpensesList } from "./ExpensesLIst";
import { ExpensesSummary } from "./ExpensesSummary";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};
