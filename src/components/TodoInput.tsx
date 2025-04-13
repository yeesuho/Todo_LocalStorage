import { Dispatch, SetStateAction, RefObject } from 'react';
import { Todo } from '../App';

interface Props {
  inputRef: RefObject<HTMLInputElement|null>;
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export default function TodoInput({ inputRef, newTodo, setNewTodo, setTodos }: Props) {
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const now = new Date().toISOString();
      const newItem: Todo = {
        id: Date.now(),
        title: newTodo,
        completed: false,
        createdAt: now,
        priority: 0,
      };
      setTodos((prev) => [...prev, newItem]);
      setNewTodo('');
      inputRef.current?.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        className='input_box'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="내용을 입력해주세요."
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleAddTodo();
        }}
      />
      <button onClick={handleAddTodo} className='add_btn'>추가</button>
    </div>
  );
}
