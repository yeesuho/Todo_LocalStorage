import { useState, useEffect, useRef } from 'react';
// import './App.css';
import { GlobalStyle } from './styled-component/GlobalStyle';
import { H } from './styled-component/Styled'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ToggleButton from './components/ToggleButton';
import { useTheme } from './custom_hooks/useTheme';
import { useTodos } from  './custom_hooks/useTodos'

// Todo 타입
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  priority: number;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const {todos, setTodos } = useTodos();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <GlobalStyle />
      
      <H>To Do List</H>
      
      <TodoInput 
        inputRef={inputRef}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        setTodos={setTodos}
      />
      
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        toggleSortOrder={() =>
          setSortOrder((prev) => (prev === 'latest' ? 'oldest' : 'latest'))
        }
        editingId={editingId}
        setEditingId={setEditingId}
        editingText={editingText}
        setEditingText={setEditingText}
      />
      <ToggleButton toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
