import React from 'react';

import './index.css';

import Myform from './Components/Myform';
import TodoList from './Components/TodoList';

class Todo extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todoList: [],
    //     }
    //
    //     this.onSubmitofTask = this.onSubmitofTask.bind(this);
    //     this.onDelete = this.onDelete.bind(this);
    // }
    // onSubmitofTask(value) {
    //     this.setState({
    //         todoList: [...this.state.todoList, value],
    //     });
    // }
    // onDelete(index) {
    //     let todoList = this.state.todoList;
    //     todoList.splice(index, 1);
    //     this.setState({
    //         todoList: todoList,
    //     })
    // }
    render() {
        return (
            <div className='TodoApp'>
                <Myform store={this.props.store} />
                <TodoList  state={this.props.store.getState()} />
            </div>
        );
    }
}


export default Todo;
