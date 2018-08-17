import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        }

        this.onSubmitofTask = this.onSubmitofTask.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onSubmitofTask(value) {
        this.setState({
            todoList: [...this.state.todoList, value],
        });
    }
    onDelete(index) {
        let todoList = this.state.todoList;
        todoList.splice(index, 1);
        this.setState({
            todoList: todoList,
        })
    }
    render() {
        return (
            <div className='App'>
                <Myform onSubmitofTask={this.onSubmitofTask} />
                <TodoList todoList={this.state.todoList} onDelete={this.onDelete} />
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(index) {
        this.props.onDelete(index);
    }
    render() {
        return (
            <div className='App-TodoList'>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.todoList.map((element, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{element}</td>
                                <td><Button index={i} onDelete={this.props.onDelete} /></td>
                            </tr>
                        )
                    }</tbody>
                </table>
            </div>
        );
    };
}
class Myform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            value: event.target.value,
        });

    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitofTask(
            this.state.value
        );
        this.setState({
            value: '',
        })
    }
    render() {
        return (
            <div className='App-Form'>
                <form name='taskForm' onSubmit={this.handleSubmit}>
                    <input type='text' name='taskName' value={this.state.value} onChange={this.onInputChange}/>
                    <input type='submit' value='submit' />
                </form>
            </div>
        );
    };
}
function Button (props) {
    function handleClick () {
        props.onDelete(props.index);
    }
    let button = <button onClick={handleClick}>Delete</button>;
    return button;
}
export default App;
