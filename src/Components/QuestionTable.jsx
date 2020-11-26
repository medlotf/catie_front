import React, { Component } from 'react';
import QuestionTableHead from "./QuestionTableHead"
import QuestionTableItem from "./QuestionTableItem"
import api from "./../services/api";

class QuestionTable extends Component {

    state = {
        questionsData: []
    }

    componentDidMount = () => {
        api.questions().fetchAll()
            .then(({ data }) => {
                this.setState({
                    questionsData: data
                })
                console.log(this.state.questionsData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleDelete = (id) => {
        api.questions().delete(id)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        this.setState({ questionsData: this.state.questionsData.filter(q => q.id !== id) })
    }

    render() {
        return (
            <table class="table table-striped">
                <QuestionTableHead />
                <tbody>
                    {this.state.questionsData.map(q => <QuestionTableItem key={q.id} question={q} onDelete={this.handleDelete} />)}
                </tbody>
            </table>
        );
    }
}

export default QuestionTable;