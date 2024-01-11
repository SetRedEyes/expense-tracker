import { StyleSheet, View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { IExpense } from "../../types/Expense";
import { COLORS } from "../../constants/colors";

const DUMMY_EXPENSES: IExpense[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 94.12,
    date: new Date("2024-01-08"),
  },
  {
    id: "e2",
    description: "Hat",
    amount: 94.12,
    date: new Date("2023-09-08"),
  },
  {
    id: "e3",
    description: "socks",
    amount: 2.12,
    date: new Date("2023-12-31"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2023-11-11"),
  },
  {
    id: "e5",
    description: "Parfume",
    amount: 200.99,
    date: new Date("2023-08-12"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 94.12,
    date: new Date("2024-01-08"),
  },
  {
    id: "e7",
    description: "Hat",
    amount: 94.12,
    date: new Date("2023-09-08"),
  },
  {
    id: "e8",
    description: "socks",
    amount: 2.12,
    date: new Date("2023-12-31"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.99,
    date: new Date("2023-11-11"),
  },
  {
    id: "e10",
    description: "Parfume",
    amount: 200.99,
    date: new Date("2023-08-12"),
  },
];

interface ExpensesOutputProps {
  expenses: IExpense[];
  expensesPeriod: string;
}

export const ExpensesOutput = ({
  expenses = DUMMY_EXPENSES,
  expensesPeriod,
}: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: COLORS.primary700,
  },
});
