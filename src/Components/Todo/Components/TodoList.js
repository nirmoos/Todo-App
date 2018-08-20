import React from 'react';

import './TodoList.css';

import { deleteTodo } from '../../../Actions';

class TodoList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.onDelete = this.onDelete.bind(this);
    // }
    // onDelete(index) {
    //     this.props.onDelete(index);
    // }
    render() {
        let todoList = this.props.store.todoList;
        this.props.store.subscribe(this);
        return (
            <div className='TodoApp-TodoList'>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{
                        todoList.map((element, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{element}</td>
                                <td><Button index={i} store={this.props.store} /></td>
                            </tr>
                        )
                    }</tbody>
                </table>
            </div>
        );
    };
}

function Button (props) {
    function handleClick () {
        props.store.dispatch(deleteTodo(this.props.index));
    }
    let button = <button onClick={handleClick}>Delete</button>;
    return button;
}

export default TodoList;
