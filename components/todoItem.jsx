import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Touchable,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
export const TodoList = ({ Lists, handleCheckBox, counterDone }) => {
  const [isSelected, setSelected] = useState(false);
  let fun = (item) => {
    setSelected(item.done);
  };
  return (
    <View>
      <FlatList
        data={Lists}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Checkbox
                  value={item.done}
                  onValueChange={() => {
                    handleCheckBox(item.id);
                  }}
                >
                  <Text>🗑</Text>
                </Checkbox>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ListHeaderComponent={() => (
          <Text style={styles.ListHeader}>My List</Text>
        )}
        ListEmptyComponent={() => (
          <View style={{ margin: 40, marginTop: 100 }}>
            <Text style={styles.empty}>Add some tasks..</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  strikeThroughTextStyle: {
    textDecorationLine: "line-through",
  },
  container: {
    backgroundColor: "#999",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 50,
    padding: 15,
    borderRadius: 10,
    opacity: 0.5,
  },
  ListHeader: {
    marginLeft: 10,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  empty: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    top: "50%",
  },
});
