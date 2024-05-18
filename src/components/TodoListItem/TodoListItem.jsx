import { GridItem, Text } from '..';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ todo, count, onDelete, onEdit }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{count + 1}
        </Text>
        <Text>{todo.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => onDelete(todo.id)}
        >
          <RiDeleteBinLine size={24} />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={() => onEdit(todo)}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
