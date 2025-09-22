import AddTodo from "@/components/todos/AddTodo";
import TodoItem from '@/components/todos/TodoItem';
import { ITodo } from "@/interfaces";
import { RootState } from "@/store/store";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import styles from "./styles";


export default function Index() {

  const todos: ITodo[] = useSelector((state: RootState) => state.todos.todos);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filtered, setFiltered] = useState(todos);
  const [isNewTodoModalVisible, setIsNewTodoModalOVisible] = useState(false);
  

   useEffect(() => {
    setFiltered(todos);
  }, [todos]);


  const renderTodoItem = ({ item }: { item: ITodo }) => (
    <TodoItem item={item} />
  );


  const onSearch = (query: string) => {
    if (query == "") {
      setFiltered(todos);
    } else {
      const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(filteredTodos);
    }
  };


  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);


  return (
    
    <SafeAreaView style={styles.container} >
      {isNewTodoModalVisible && (
        <AddTodo setIsModalVisible={setIsNewTodoModalOVisible} />
      )}
     
      
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color={"#333"} />
        <TextInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.searchInput}
          clearButtonMode="always"
        />
      </View>
      
      <FlatList
        data={[...filtered].reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodoItem}
      />

      <KeyboardAvoidingView
        style={styles.footer}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <Pressable style={styles.addButton} onPress={() => setIsNewTodoModalOVisible(true)}>
          <Ionicons name="add" size={34} color={"#fff"} />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


