import { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Button, Input, Overlay, Text } from 'react-native-elements';


import { IEditTodoProps } from '@/interfaces';
import { editTodo } from '@/store/features/todoSlice';
import { useDispatch } from 'react-redux';


const EditTodo = ({ setIsModalVisible, item }: IEditTodoProps) => {
  const [todoTitle, setTodoTitle] = useState(item.title);
  const [showError, setshowError] = useState(false);
  const [todoText, setTodoText] = useState(item.text? item.text : "");

  const dispatch = useDispatch();

  const handleEditTodo = () => {
    if (todoTitle.trim()) {
      dispatch(
        editTodo({
            id: item.id,
            title: todoTitle.trim(),
            text: todoText.trim(),
            isCompleted: item.isCompleted,
        })
      );
      setTodoTitle(item.title);
      item.text? setTodoText(item.text) : setTodoText("");
      setshowError(false);
      setIsModalVisible(false);
    } else {
      setshowError(true);
    }
  };

  return (
    <KeyboardAvoidingView>
      <Overlay
        isVisible={true}
        onBackdropPress={() => setIsModalVisible(false)}
        overlayStyle={{ width: '90%' }}>
        <View>
          <Input
            value={todoTitle}
            onChangeText={setTodoTitle}
          />
          <Input
            value={todoText}
            onChangeText={setTodoText}
          />
          <Button title='Save Changes' onPress={handleEditTodo} />
          {showError && (<Text style={{padding: 3} } >Please write the title</Text>)}
        </View>
      </Overlay>
    </KeyboardAvoidingView>
  );
};

export default EditTodo;
