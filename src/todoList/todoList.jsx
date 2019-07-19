import React, {Component} from 'react';
import TodoItem from './todoItem/todoItem'
import Header from './header/header'
import './todoList.css';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.inputChange = this.inputChange.bind(this);
        this.bindAddBtnClick = this.bindAddBtnClick.bind(this);
        this.bindDelItem = this.bindDelItem.bind(this);
    }

    render() {
        return (
            <div className='page'>
                <Header/>
            </div>
        );
    }

    getItem = () => {
        return (this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    delItem={this.bindDelItem.bind(this)}
                />
            );
        }));
    }

    inputChange = (ev) => {
        const inputValue = ev.target.value;
        this.setState({
            inputValue
        })
    }

    bindAddBtnClick = () => {
        if (this.state.inputValue === '')
            return;
        this.setState((prevState) => {
            let list = [...prevState.list, prevState.inputValue]
            let inputValue = '';
            return {inputValue, list}
        })
    }

    bindDelItem = (index) => {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}