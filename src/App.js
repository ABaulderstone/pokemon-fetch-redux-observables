import React from 'react'; 
import {fetchPokemon}  from "./actions"
import {connect} from 'react-redux';


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
        <ul>
        {!isLoading && !error && pokemon.length > 0 &&
        pokemon.map( pokemon => (
            <li>
                {pokemon.name}
            </li>
        ))}
        </ul>
        {error && <h2> {error} </h2>}
        </>
       


   
    )
   }
   
   
 
}

const mapStateToProps = (state) => ({...state});


export default connect(mapStateToProps, {fetchPokemon})(App);
