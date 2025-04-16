import { Dispatch, SetStateAction } from 'react';
import { Todo } from '../App';
import TodoItem from './TodoItem';
import { TodoBox } from '../styled-component/Styled';
// import { CompleteBox, FilterButton, TodoBox,  } from '../styled-component/Styled';

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  filter: 'all' | 'completed' | 'incomplete';
  setFilter: Dispatch<SetStateAction<'all' | 'completed' | 'incomplete'>>;
  sortOrder: 'latest' | 'oldest';
  toggleSortOrder: () => void;
  editingId: number | null;
  setEditingId: Dispatch<SetStateAction<number | null>>;
  editingText: string;
  setEditingText: Dispatch<SetStateAction<string>>;
}

export default function TodoList({
  todos,
  setTodos,
  filter,
  setFilter,
  sortOrder,
  toggleSortOrder,
  editingId,
  setEditingId,
  editingText,
  setEditingText,
}: Props) {
  const handleDeleteAll = () => {
    if (window.confirm('정말 전체 삭제하시겠습니까?')) {
      setTodos([]);
    }
  };

  const filtered = todos
    .filter(todo =>
      filter === 'completed' ? todo.completed :
      filter === 'incomplete' ? !todo.completed : true
    )
    .sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return sortOrder === 'latest'
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

  return (
    <TodoBox className="todo_box">
      <button className="arryabutton" onClick={toggleSortOrder}>
        {sortOrder === 'latest' ? '최신순' : '과거순'}
      </button>
      {['all', 'completed', 'incomplete'].map((f) => (
        <button
          key={f}
          className={`arraybuttons ${filter === f ? 'active' : ''}`}
          onClick={() => setFilter(f as typeof filter)}
        >
          {f === 'all' ? '전체' : f === 'completed' ? '완료' : '미완료'}
        </button>
      ))}
      <button className="arryabutton" onClick={handleDeleteAll}>전체삭제</button>
      <ul>
        {filtered.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            editingId={editingId}
            setEditingId={setEditingId}
            editingText={editingText}
            setEditingText={setEditingText}
          />
        ))}
      </ul>
    </TodoBox>
  );
}
