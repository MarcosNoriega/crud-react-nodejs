import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList'

function App() {
  return (
    <Router>
      <Nav />

      <div className="container mt-3">
        <Route path="/" exact component={NotesList} />
        <Route path="/create" component={CreateNote} />
        <Route path="/update/:id" component={CreateNote} />
      </div>
    </Router>
  );
}

export default App;
