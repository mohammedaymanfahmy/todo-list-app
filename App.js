import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AddTODO } from "./components/addComponent";
import { Header } from "./components/header";
import { useState } from "react";
import { TodoList } from "./components/todoItem";

let taskDone = 0;
export default function App() {
  const [list, setList] = useState([]);
  const handleAddTodo = (todo) => {
    setList([...list, todo]);
  };

  const handleIsChecked = (id) => {
    setList((prevList) => {
      const temp = prevList.filter((item) => item.id !== id);
      //console.log(temp);
      taskDone++;
      return temp;
    });
  };

  return (
    <View style={{ backgroundColor: "#407294", height: "100%" }}>
      <Header title={"todo-list-app"} />
      <AddTODO onTodoAdd={handleAddTodo} />
      <StatusBar style="hidden" />
      <TodoList
        Lists={list}
        handleCheckBox={handleIsChecked}
        counterDone={taskDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
