import React, { Component } from 'react';
import QuestionItem from "./QuestionItem"
import "./../styles/survey.css"


class QuestionList extends Component {

    render() {
        const { questions, results } = this.props
        return (
            <div className="qItem">
                { questions.map((q, i) => <QuestionItem key={i} index={i} question={q} results={results} />)}
            </div>
        );
    }
}

export default QuestionList;