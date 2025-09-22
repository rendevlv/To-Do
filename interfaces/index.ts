export interface ITodo {
  id: number;
  title: string;
  text?: string;
  isCompleted: boolean;
}


export interface IAddTodoProps {
  setIsModalVisible: (visible: boolean) => void;
}

export interface IEditTodoProps {
  setIsModalVisible: (visible: boolean) => void;
  item: ITodo;
}

export interface ITodoItemProps {
  item: ITodo;
}

