import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IExpense } from "../../types/Expense";
import { COLORS } from "../../constants/colors";

interface ExpensesSummaryProps {
  expenses: IExpense[];
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
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: COLORS.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: COLORS.primary400,
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary500,
  },
});
