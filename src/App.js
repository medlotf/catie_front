import React from 'react'
import { Route } from 'react-router-dom'

import './App.css';

import AdminDashboard from './Components/views/AdminDashboard';
import Survey from './Components/views/Survey';
import AdminQuestionForm from './Components/views/AdminQuestionForm';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">

        <Route exact path="/" component={Survey} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/admin/addQuestion" component={AdminQuestionForm} />
      </div>
    </div>
  );
}

export default App;
