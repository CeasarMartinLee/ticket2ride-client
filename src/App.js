import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import LoginFormContainer from './components/LoginFormContainer'


class App extends Component {
  render() {
    return (
        <div>
            <div>
              <Navbar />
            </div>
              <Route path="/login" component={LoginFormContainer} />
          {/* <Route path="/" exact component={EventsListContainer} /> */}
          {/* <Route path="/events/:id" component={EventDetailsContainer} /> */}

        </div>
    );
  }
}

export default App;
