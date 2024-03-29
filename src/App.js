import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import LoginFormContainer from './components/LoginFormContainer'
import EventsListContainer from './components/EventsListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'
import TicketDetailsContainer from './components/TicketDetailsContainer'
import RegisterFormContainer from './components/RegisterFormContainer'
import LogoutPage from './components/LogoutPage';
import SplashScreen from './components/SplashScreen';



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/events" component={EventsListContainer} />
          {/* <Route exact path="/" render={() => <Redirect to="/events" />} /> */}
          <Route exact path="/" component={SplashScreen} />
          <Route exact path="/events/:id" component={EventDetailsContainer} />
          <Route exact path="/events/:eventId/tickets/:ticketId" component={TicketDetailsContainer} />
          {/* <Route path="/" exact component={EventsListContainer} /> */}
          {/* <Route path="/events/:id" component={EventDetailsContainer} /> */}

        </div>

      </div>
    );
  }
}

export default App;
