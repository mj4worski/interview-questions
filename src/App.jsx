import React, { Component } from 'react';
import Header from './components/Header';
import { InterviewQuestion } from './components/question';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="sections">
            <section className="interview-questions">
                <InterviewQuestion/>
            </section>
        </main>
      </div>
    );
  }
}

export default App;
