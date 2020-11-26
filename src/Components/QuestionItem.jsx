import React, { Component } from 'react';
import "./../styles/survey.css"

class QuestionItem extends Component {

    state = {
        questionId: this.props.question.id,
        scaleResponse: null,
        textResponse: null
    }

    handleChange = (e) => {

        const target = e.target;
        const value = target.value;
        const name = target.name;

        let exist = this.responseExist(this.state.questionId);

        if (value !== "") {
            this.setState({
                [name]: value
            })
        }

        if (exist) {
            let ind = this.props.results.indexOf(this.state)
            //Remplace the object by a new one with splice function
        }
        else {
            //Add object contain response for an question in table results
        }
    }

    responseExist = (id) => {
        if (this.props.results.some(res => res.questionId === id))
            return true
        return false
    }

    scaleRender = () => {
        if (this.props.question.scaleType) {
            //Implementation Scale
            return (
                <h1>rating</h1>
            )
        }
    }

    textRender = () => {
        if (this.props.question.textType) {
            return (
                <div className="form-group textareaInput">
                    <textarea className="form-control" id="textType" rows="3" name="textResponse" required onChange={this.handleChange}></textarea>
                </div>
            )
        }
    }

    render() {
        const { question, index } = this.props
        return (
            <div>
                <h4>{index + 1}.{question.question}</h4>
                <form>
                    {this.scaleRender()}
                    {this.textRender()}
                </form>

            </div>
        );
    }
}

export default QuestionItem;