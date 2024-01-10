import { useMemo } from "react";
import { Text, View } from "react-native";
import { IExpenses } from "../../types/Expenses";

interface ExpensesSummaryProps {
  expenses: IExpenses[];
  periodName: string;
}

export const ExpensesSummary = ({
  expenses,
  periodName,
}: ExpensesSummaryProps) => {
  const expensesSum: string = useMemo(() => {
    return expenses
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
