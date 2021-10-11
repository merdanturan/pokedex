import {combineReducers} from "redux";
import pokemonListReducer from "./pokemonListReducer";
import pokemonMultipleReducer from "./pokemonMultipleReducer";

const rootReducer = combineReducers({
  PokemonList: pokemonListReducer,
  Pokemon: pokemonMultipleReducer
});

export default rootReducer;