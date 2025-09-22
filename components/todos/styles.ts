import {
    StyleSheet,
} from "react-native";


const styles = StyleSheet.create({

  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 7,
    borderRadius: 10,
    paddingVertical: 8,
  },

  completedTodo: {
    backgroundColor: "#818181ff"
  },

  checkbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    width: 20,
    height: 20,
    padding: 3,
  },


  todoContainer: {
    flex: 1,
  },

  todoTitle: {
    fontSize: 20,
  },

  completedTodoTitle: {
    textDecorationLine: 'line-through',
  },

  todoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },

  completedTodoText: {
    textDecorationLine: 'line-through',
  },

  deleteButton: {
    marginLeft: 10,
  },
});

export default styles;