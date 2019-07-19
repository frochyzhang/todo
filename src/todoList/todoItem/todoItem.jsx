import React, {Component} from 'react';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.itemDelete = this.itemDelete.bind(this);
    }

    render() {
        const {content} = this.props
        return (
            <li
                onClick={this.itemDelete}
            >
                {content}
            </li>
        );
    }

    itemDelete() {
        const {index, delItem} = this.props;
        delItem(index)
    }
}