import { ITodoItemProps } from '@/interfaces';
import { removeTodo, toggleTodo } from '@/store/features/todoSlice';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import EditTodo from './EditTodo';
import styles from './styles';


const TodoItem = ({ item }: ITodoItemProps) => {
  const dispatch = useDispatch();
  const [isEditTodoModalOpen, setEditTodoModalOpen] = useState(false);

  return (
    
    <View style={[styles.todo,
     item.isCompleted && styles.completedTodo]}>
      {isEditTodoModalOpen && (
        <EditTodo setIsModalVisible={setEditTodoModalOpen} item={item} />
      )}
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => dispatch(toggleTodo(item.id))}>
        {item.isCompleted && (
          <Icon name="check"></Icon>
        ) }
      </TouchableOpacity>
     
      <View style={styles.todoContainer}>
        <Text
          style={[
            styles.todoTitle,
            item.isCompleted && styles.completedTodoTitle
          ]}>
          {item.title}
        </Text>
        {item.text && (
          <Text style={[styles.todoText,
            item.isCompleted && styles.completedTodoText
          ]}>
          {item.text}</Text>
        )}
      </View>
     
      <TouchableOpacity
        onPress={() => setEditTodoModalOpen(true)}
        style={styles.deleteButton}>
        <Icon name='edit' size={24} color='#1f1e1eff' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(removeTodo(item.id))}
        style={styles.deleteButton}>
        <Icon name='trash' size={24} color='#ff3c00ff' />
      </TouchableOpacity>
    </View>
    
  );
};



export default TodoItem;
