import React, { Component } from 'react';
import api from "./../../services/api";
import axios from "axios";

import QuestionList from "./../QuestionList"
import "./../../styles/survey.css"

class Survey extends Component {

    state = {
        questionsData: [],
        resultas: []
    }

    componentWillMount = () => {
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

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.resultas.length === this.state.questionsData.length) {

            //insert in database
            this.state.resultas.map(r => {
                axios.post("http://localhost:3003/reponses", r)
                    .then(({ data }) => {
                        console.log(data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })

            //go to admin page
            this.props.history.push('/thanks')

        }
        else {
            alert("Merci de répondre")
            //add Toast
        }
    }

    render() {
        return (
            <div className="survey">
                <h2 className="text-center mb-2">Questionnaires</h2>
                <form onSubmit={this.handleSubmit}>
                    <QuestionList questions={this.state.questionsData} resultas={this.state.resultas} />
                    <div class="row">
                        <div class="col text-center">
                            <input type="submit" value="Envoyer" className="btn btn-success m-4" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Survey;