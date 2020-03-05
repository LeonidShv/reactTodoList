import React from 'react';
import Title from '../Title/Title';
import TodoList from '../TodoList/TodoList';

const todoData = [
    {label: 'Drink Coffe', important: false, id: 1},
    {label: 'make React-App', important: true, id: 2},
    {label: 'watch video', important: false, id: 3},
]

export default function App() {
    return (
        <div>
            <Title />
            <input placeholder="search" />
            <TodoList todoData={todoData} />  
        </div>
    );
}