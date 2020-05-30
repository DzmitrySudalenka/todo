import React from "react";

import TodoListItem from './todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {

    /*const items = ['Learn React', 'Build Awesome App'];*/

    /*return (
        <ul>
            <li><TodoListItem
                label={ todos[0].label }
                important={ todos[0].important }
            /></li>
            <li><TodoListItem
                label={ todos[1].label }
                important={ todos[1].important }
            /></li>
            <li><TodoListItem
                label={ todos[2].label }
                important={ todos[2].important }
            /></li>
        </ul>
    );*/

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            /*<li key={ item.id }>*/
            <li key={ id } className="list-group-item">
                {/*<TodoListItem
                    label={ item.label }
                    important={ item.important }
                />*/}
                <TodoListItem { ...itemProps } />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );

    /*return (
        <ul>
            <li><TodoListItem
                label={ todos[0].label }
                important={ todos[0].important }
            /></li>
            <li><TodoListItem
                label={ todos[1].label }
                important={ todos[1].important }
            /></li>
            <li><TodoListItem
                label={ todos[2].label }
                important={ todos[2].important }
            /></li>
        </ul>
    );*/
}

export default TodoList;