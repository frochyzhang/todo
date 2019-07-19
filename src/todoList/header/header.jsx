import React, {Component} from 'react';

import './header.css'

export default class Header extends Component {

    render() {
        return (
            <div className='header'>
                <label className='label'>ToDoList</label>
                <input placeholder='添加ToDo'/>
            </div>
        )
    }

}