import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

/*const el = React.createElement('h1', null, 'Hello World');*/

/*const el = <h1>Hello World</h1>;*/

const App = () => {

    /*const isLoggedIn = false;

    const loginBox = <div>Log in please</div>;

    const welcomeBox = <div>Welcome Back</div>*/

    /*const value = '<script>alert("");</script>';*/

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            {/*{ value }*/}
            {/*{ isLoggedIn ? welcomeBox : loginBox }*/}
            {/*<span>{ (new Date()).toString() }</span>*/}
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            {/*<TodoList items={ ['Item 1', 'Item 2'] }/>*/}
            <TodoList todos={ todoData } />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);