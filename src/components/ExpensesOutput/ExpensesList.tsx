import { FlatList, Text } from "react-native";
import { IExpense } from "../../types/Expense";
import { ExpenseListItem } from "./ExpenseListItem";

interface ExpensesListProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  const renderItem = ({ item }: { item: IExpense }) => {
    return (
      <ExpenseListItem
        description={item.description}
        date={item.date}
        amount={item.amount}
      />
    );
  };

  const keyExtractor = (item: IExpense) => item.id.toString();

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
