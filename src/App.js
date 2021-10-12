import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//Pages
import Landing from './pages/Landing/Landing';
import Pokedex from './pages/Pokedex/Pokedex';
import Pokemon from './pages/Pokemon/Pokemon'
import Catch from './pages/Catch/Catch';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/pokedex" component={Pokedex} exact />
          <Route path="/pokemon/:pokemon" component={Pokemon} exact />
          <Route path="/mypokemons" component={Catch} exact />
          <Route path="/catch" component={Catch} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
