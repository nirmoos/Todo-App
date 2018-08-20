import React from 'react';

import './Myform.css';

import { addTodo } from '../../../Actions';

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
        this.props.store.dispatch(addTodo(this.state.value));
        this.setState({
            value: '',
        })
    }
    render() {
        return (
            <div className='TodoApp-Form'>
                <form name='taskForm' onSubmit={this.handleSubmit}>
                    <input type='text' name='taskName' value={this.state.value} onChange={this.onInputChange} />
                    {' '}
                    <input type='submit' value='SUBMIT' />
                </form>
            </div>
        );
    };
}

export default Myform;
