import React, { Component } from 'react';
import './stylesheets/App.css';
import OpeningPage from './pages/openingPage';
import LandingPage from './pages/landingPage';
import MoviePage from './pages/moviePage';
import PersonPage from './pages/personPage';
import { connect } from 'react-redux';
import { changePage } from './actions/allActions'
import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {

  const homeBtn =
    <Button
      id='back-btn'
      inverted
      onClick={() => this.props.changePage('a')}>
      HOME
    </Button>

  const logoutBtn =
    <Button
      id='logout-btn'
      inverted
      onClick={() => window.location.reload()}>
      LOGOUT
    </Button>

    if (this.props.whichPage === 'o') {
      return (
        <div>
          <OpeningPage />
        </div>
      );
    } else if (this.props.whichPage === 'a') {
      return (
        <div>
          <LandingPage />
          {logoutBtn}
        </div>
      )
    } else if (this.props.whichPage === 'm') {
      return (
        <div id="movie-background">
          <MoviePage />
          {homeBtn}
        </div>
      )
    } else if (this.props.whichPage === 'p') {
      return (
        <div id="movie-background">
          <PersonPage />
          {homeBtn}
        </div>
      )
    } else {
      return (
        <div>
          DID YOU CHANGE whichPage CORRECTLY?
        </div>
      )
    } 
  }
}

const mapStatetoProps = state => {
  return ({
    whichPage: state.whichPage
  })
}

export default connect(mapStatetoProps, {changePage})(App);
