
export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
  }
  
export interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
  onAskDelete: (id: number) => void;
}

  
  export interface ITodoFormProps {
    onAdd: (title: string) => void;
  }
  
  