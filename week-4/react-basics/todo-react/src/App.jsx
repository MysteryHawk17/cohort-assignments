import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        description: description
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
    }
  };

  const editTodo = (id) => {
    setEditId(id);
  };

  const saveEdit = () => {
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        id="title"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> <br /><br />
      <input
        type="text"
        id="description"
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> <br /><br />
      <button onClick={addTodo}>Add todo</button>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) => {
                    const newTodos = [...todos];
                    newTodos.find(t => t.id === todo.id).title = e.target.value;
                    setTodos(newTodos);
                  }}
                />
                <input
                  type="text"
                  value={todo.description}
                  onChange={(e) => {
                    const newTodos = [...todos];
                    newTodos.find(t => t.id === todo.id).description = e.target.value;
                    setTodos(newTodos);
                  }}
                />
                <div className="but-container">
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div className='title'>{todo.title}</div>
                <div className='description'>{todo.description}</div>
                <div className='id'>{todo.id}</div>
                <div className="but-container">
                  <div className="todo-button" onClick={() => editTodo(todo.id)}>Edit</div>
                  <div className="todo-button" onClick={() => deleteTodo(todo.id)}>Delete</div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
