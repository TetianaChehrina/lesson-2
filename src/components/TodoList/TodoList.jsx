import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          count={index}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </Grid>
  );
};
