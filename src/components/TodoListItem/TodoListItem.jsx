import React from 'react';

export default function TodoListItem({label, important}) {
    return (
        <span className={important ? 'important' : 'default'}>{label}</span>
    );
}