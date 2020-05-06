import React from 'react';
import {Router, Link} from '@reach/router';
import 'bulma/css/bulma.min.css';
import Status from './components/status';
import NewProject from "./components/NewProject";


function App() {
  return (
    <div className="container">
          <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title" style ={{fontSize: "75px"}} >
              Project Manager
            </h1>
          </div>
        </div>
        </section>
        <Router>
          <Status path = "/"/>
          <NewProject path ="/projects/new" />
        </Router>
    </div>
  );
}

export default App;
