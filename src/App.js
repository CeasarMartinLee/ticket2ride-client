import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import Navbar from './components/NavBar'
import LoginFormContainer from './components/LoginFormContainer'
import EventsListContainer from './components/EventsListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'


class App extends Component {
  render() {
    return (
        <div>
            <div>
              <Navbar />
            </div>
            <div>
            <Route exact path="/login" component={LoginFormContainer} />
              <Route exact path="/logout" render={() => <Redirect to="/events" />} />
              <Route exact path="/events" component={EventsListContainer} />
              <Route exact path="/" render={() => <Redirect to="/events" />} />
              <Route exact path="/events/:id" component={EventDetailsContainer} />

          {/* <Route path="/" exact component={EventsListContainer} /> */}
          {/* <Route path="/events/:id" component={EventDetailsContainer} /> */}

            </div>

        </div>
    );
  }
}

export default App;
