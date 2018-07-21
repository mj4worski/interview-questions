import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Result from './components/result';
import { InterviewForm } from './components/interviewForm';
import QuestionsProvider from './components/questions';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="sections">
            <Route exact path="/" component={InterviewForm} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/questions" component={QuestionsProvider} />
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
