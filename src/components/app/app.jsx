import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomeScreen} errorsCount={errorsCount} />
        <Route exact path='/dev-artist' component={ArtistQuestionScreen} />
        <Route exact path='/dev-genre' component={GenreQuestionScreen} />
        <Route exact path='/login' component={AuthScreen} />
        <Route exact path='/result' component={WinScreen} />
        <Route exact path='/lose' component={GameOverScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
