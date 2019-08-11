import React from 'react'; 
import {fetchPokemon}  from "./actions"
import {connect} from 'react-redux';
import PokemonTable from './PokemonTable'


class App extends React.Component {  
   componentDidMount() {
    this.props.fetchPokemon();
   }
    render() {
       const {fetchPokemon, error, isLoading, pokemon} = this.props;
       console.log(pokemon);
    return (
        <>
        {isLoading && <h2> Getting Pokemon </h2>}
    
        {!isLoading && !error && pokemon.length > 0 && <PokemonTable pokemon={pokemon} />}
        
        {error && <h2> {error} </h2>}
        </>
       


   
    )
   }
   
   
 
}

const mapStateToProps = (state) => ({...state});


export default connect(mapStateToProps, {fetchPokemon})(App);
