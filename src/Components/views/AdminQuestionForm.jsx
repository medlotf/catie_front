import React, { Component } from 'react';
import api from "./../../services/api"
import './../../styles/AdminQuestionForm.css'

class AdminQuestionForm extends Component {

    state = {
        question: "",
        textType: false,
        scaleType: false
    }

    validateCheckbox = () => {
        let cmp = 0
        if (!this.state.textType)
            cmp++
        if (!this.state.scaleType)
            cmp++
        return cmp === 2 ? false : true
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validateCheckbox()) {

            //create question object
            let newQuestion = {
                question: this.state.question,
                textType: this.state.textType,
                scaleType: this.state.scaleType
            }
            //insert in database
            api.questions().create(newQuestion)
                .then(({ data }) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })

            //go to admin page
            this.props.history.push('/admin')

        }
        else {
            alert("Choisissez un ou ceux types de réponses")
            //add Toast
        }
    }

    handleChange = (e) => {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }


    render() {
        return (
            <div>
                <h3 className="mt-4">Ajouter une question</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="questionInput">Question :</label>
                        <input type="text" className="form-control" id="questionInput" required name="question" value={this.state.question.question} onChange={this.handleChange} />
                    </div>
                    Type of answers :
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="textType" name="textType" checked={this.state.question.textType} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="textType">Text</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="scaleType" name="scaleType" checked={this.state.question.scaleType} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="scaleType">Scale</label>
                    </div>
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

export default AdminQuestionForm;