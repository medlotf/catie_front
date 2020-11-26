import React, { Component } from 'react';

class QuestionTableHead extends Component {
    render() {
        return (
            <thead class="thead-dark">
                <tr>
                    <th scope="col" style={{ width: "10%" }}>#</th>
                    <th scope="col">Question</th>
                    <th scope="col" style={{ width: "25%" }}>Actions</th>
                </tr>
            </thead>
        );
    }
}

export default QuestionTableHead;