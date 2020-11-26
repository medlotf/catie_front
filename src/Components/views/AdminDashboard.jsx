import React, { Component } from 'react';
import QuestionTable from "../QuestionTable"


class AdminDashboard extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/admin/addQuestion')
    }

    render() {
        return (
            <div>
                <div className="row justify-content-between mt-4">
                    <div className="col-sm-3">
                        <h3>Question List:</h3>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" class="btn btn-success" onClick={this.handleClick} >
                            Add Question
                        </button>
                    </div>
                </div>

                <QuestionTable />
            </div>
        );
    }
}

export default AdminDashboard;