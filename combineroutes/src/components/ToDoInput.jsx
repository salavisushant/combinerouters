import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/Todos/action';


export const ToDoInput = () => {
    const [title, setTitle] = useState(""); 

    const dispatch = useDispatch();

    const handleAdd = () => {
        const payload = {
            title,
            id: nanoid(10),
            status: false,
        };
        dispatch(addTodo(payload));
    }

    const todos = useSelector((state) => state.todoReducer.todos);

    return (
        <div>
            <h2>Add To Do</h2>
            <input
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Type something....'
            />
            <button onClick={handleAdd}>Add</button>
            <div>
                {todos.map((i) => (
                    <h4 key={i.id}>{ i.title}</h4>
                ))}
            </div>
        </div>
    )
}
