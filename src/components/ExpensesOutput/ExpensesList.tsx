import { FlatList, Text } from "react-native";
import { IExpenses } from "../../types/Expenses";

interface ExpensesListProps {
  expenses: IExpenses[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  const renderItem = ({ item }: { item: IExpenses }) => {
    return <Text>{item.description}</Text>;
  };

  const keyExtractor = (item: IExpenses) => item.id.toString();

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
