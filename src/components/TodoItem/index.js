// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, onDeleteTodos} = props
  const {id, title} = todosList

  const onDelete = () => {
    onDeleteTodos(id)
  }

  return (
    <li className="list-container">
      <p className="description">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
