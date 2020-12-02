import { EmptySearchContainer, FlexMovies, HomeContainer, InputContainer } from "./styled-HomePage";
import galflix from "../../Assets/galfix.png"
import { useContext} from "react";
import { useEffect } from "react";
import { CardMoviesHome } from "../../Components/CardMoviesHome/CardMoviesHome";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import {goToMoviePage} from '../../Router/Coordinator'
export function HomePage() {
    const history = useHistory()
    const { states,requests, functions} = useContext(GlobalStateContext)
  
    useEffect(() => {
        // Requisição para renderizar filmes que estão sendo procurados na tela
        requests.getSearchedMovies(states.searchedMovie);
      }, [states.searchedMovie]);
    
    // Função de renderização condicional para renderizar os filmes que estão sendo procurados, e caso nada esteja sendo procurado renderizar o logo da galflix.
    const renderSearchedMovies = () => {
        if (states.searchedMovie === ""){
            return(
                <EmptySearchContainer>
                <img src={galflix}/>
                <p>Não sabe o que procurar?</p>
                <a onClick={functions.onClickSearchGal}>Aqui uma oferta irrecusável</a>
                </EmptySearchContainer>
            )
        } else if (states.listOfMovies) {
            return(
            states.listOfMovies.map((movie)=>{
                if(movie.Poster.length > 10){
                return(
                    <CardMoviesHome poster={movie.Poster} title={movie.Title} year={movie.Year} onClick={()=> goToMoviePage(history, movie.imdbID)} id={movie.imdbID}/>
                )
                }
            })
            )
        } 
    }
    
    return(
        <HomeContainer>
            <InputContainer>
                <img src={galflix} onClick={functions.cleanSearchedMovies}/>
                <input placeholder="Procurar filmes..." onChange={functions.onChangeSetSearchedMovie} value={states.searchedMovie}/>
            </InputContainer>
            <FlexMovies>
            {renderSearchedMovies()}
            </FlexMovies>
            
    
        </HomeContainer>
    )
}