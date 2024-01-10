import { useMemo } from "react";
import { Text, View } from "react-native";

export const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum: number = useMemo(() => {
    expenses
      .reduce((sum: number, expense) => sum + expense.amount, 0)
      .toFixed(2);
  }, []);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum}</Text>
    </View>
  );
};
