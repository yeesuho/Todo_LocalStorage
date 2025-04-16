import { Todo } from '../App';
import { Dispatch, SetStateAction } from 'react';
import { CompleteBox, PriorityButton, PriorityDisplay, TextBox } from '../styled-component/Styled';
// import {  }

interface Props {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  editingId: number | null;
  setEditingId: Dispatch<SetStateAction<number | null>>;
  editingText: string;
  setEditingText: Dispatch<SetStateAction<string>>;
}

export default function TodoItem({
  todo,
  setTodos,
  editingId,
  setEditingId,
  editingText,
  setEditingText
}: Props) {
  const toggleCompleted = () => {
    setTodos(prev =>
      prev.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t)
    );
  };

  const handleDelete = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
  };

  const handlePriority = (diff: number) => {
    setTodos(prev =>
      prev.map(t => t.id === todo.id ? { ...t, priority: t.priority + diff } : t)
    );
  };

  const saveEdit = () => {
    if (editingText.trim()) {
      setTodos(prev =>
        prev.map(t =>
          t.id === todo.id ? { ...t, title: editingText } : t
        )
      );
    }
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  return (
    <li>
      <TextBox className='text_box'>
        {editingId === todo.id ? (
          <input
            className='input_box'
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            onBlur={cancelEdit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') saveEdit();
              if (e.key === 'Escape') cancelEdit();
            }}
            autoFocus
          />
        ) : (
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#999' : '#000',
              cursor: 'pointer'
            }}
            onDoubleClick={() => {
              setEditingId(todo.id);
              setEditingText(todo.title);
            }}
          >
            {todo.title}
          </span>
        )}
        <button onClick={handleDelete}>삭제</button>
        <CompleteBox
          className='complete_box'
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <PriorityButton className='priority_button priority_button_right' onClick={() => handlePriority(1)}>+</PriorityButton>
        <PriorityButton className='priority_button' onClick={() => handlePriority(-1)}>-</PriorityButton>
        <PriorityDisplay className='priority_display'>우선순위: {todo.priority}</PriorityDisplay>
      </TextBox>
    </li>
  );
}
