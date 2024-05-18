import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todolist');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [isEditing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = text => {
    const newTodo = { id: nanoid(), text };
    setTodos(prevTodo => [...prevTodo, newTodo]);
  };

  const handleDelete = id => {
    setTodos(prevTodo => prevTodo.filter(t => t.id != id));
  };

  const handleEdit = todo => {
    setEditing(true);
    setCurrentTodo(todo);
  };

  const handleSave = text => {
    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo,
      ),
    );
    handleCancel();
  };

  const handleCancel = () => {
    setEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          text={currentTodo.text}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <Form onSubmit={handleAddTodo} />
      )}
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
