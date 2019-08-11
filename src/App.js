import React from 'react'; 
import {fetchPokemon}  from "./actions"
import {connect} from 'react-redux';

class App extends React.Component {  
   render() {
       const {fetchPokemon, error, isLoading, pokemon} = this.props;
    return (
        <div className= "App" >
        <button onClick={fetchPokemon}>Get OG Pokemon </button>
        {isLoading && <h2> Getting Pokemon </h2>}
        {!isLoading && !error && pokemon.length > 0 && <h2>Got Pokemon</h2>}
        {error && <h2> {error} </h2>}


    </div>
    )
   }
   
   
 
}

const mapStateToProps = (state) => ({...state});


export default connect(mapStateToProps, {fetchPokemon})(App);
