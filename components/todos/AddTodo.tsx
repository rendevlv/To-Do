import { useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Button, Input, Overlay, Text } from 'react-native-elements';


import { IAddTodoProps } from '@/interfaces';
import { addTodo } from '@/store/features/todoSlice';
import { useDispatch } from 'react-redux';


const AddTodo = ({ setIsModalVisible }: IAddTodoProps) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [showError, setshowError] = useState(false);
  const [todoText, setTodoText] = useState('');

  
  const dispatch = useDispatch();


  const handleAddTodo = () => {
    if (todoTitle.trim()) {
      dispatch(
        addTodo({
          title: todoTitle.trim(),
          text: todoText.trim(),
          isCompleted: false,
        })
      );
      setTodoTitle('');
      setTodoText('');
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
            placeholder='Enter Title'
            value={todoTitle}
            onChangeText={setTodoTitle}
          />
          <Input
            placeholder='Enter Description'
            value={todoText}
            onChangeText={setTodoText}
          />

          <Button title='Add Todo' onPress={handleAddTodo} />
           {showError && (<Text style={{padding: 3}} >Please write the title</Text>)}
        </View>
      </Overlay>
    </KeyboardAvoidingView>
  );
};

export default AddTodo;
