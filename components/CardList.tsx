import { FlatList } from "react-native";
import { Card } from ".";
import * as facilities from '../data/facilities.json';

export const CardList = () => {
  return (
    <FlatList
      data={facilities.data}
      renderItem={({ item }) => <Card facility={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
