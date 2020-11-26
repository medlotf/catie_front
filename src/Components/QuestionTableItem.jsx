import React, { Component } from 'react';

class QuestionTableItem extends Component {
    render() {
        const { question, onDelete } = this.props;
        return (
            <tr>
                <th scope="row">{question.id}</th>
                <td>{question.question}</td>
                <td >
                    <button type="button" className="btn btn-success m-1" disabled>Edit</button>
                    <button type="button" className="btn btn-danger m-1" onClick={() => onDelete(question.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}

export default QuestionTableItem;