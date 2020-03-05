import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';



const TodoList = ({ todoData }) => {
    const elements = todoData.map( (item) => {
        const {id, ...otherProps} = item;

        return (
            <li key = {id}>
                <TodoListItem {...otherProps} />
            </li>
        );
    });

    return elements;
}

export default TodoList;

/****************************************************************/
// todoData должно совпадать с тем что я указывал в App.jsx
// export default function TodoList({ todoData }) {
//     return (
//         <ul>
//             <li><TodoListItem todoItem={todoData[0].label} /></li>
//             <li><TodoListItem todoItem={todoData[1].label} /></li>
//             <li><TodoListItem todoItem={todoData[2].label} /></li>
//         </ul>
//     );
// }

/* реализция без деструктизации */
/****************************************************************/
// export default function TodoList(props) {
//     return (
//         <ul>
//             <li><TodoListItem todoItem={props.todoData[0].label} /></li>
//             <li><TodoListItem todoItem={props.todoData[1].label} /></li>
//             <li><TodoListItem todoItem={props.todoData[2].label} /></li>
//         </ul>
//     )
// }