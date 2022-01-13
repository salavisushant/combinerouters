import { ADD_TODO } from "../Todos/actionTypes"


export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    }
}