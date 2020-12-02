import React, { useState } from 'react';
import axios from 'axios';
import GlobalStateContext from './GlobalStateContext';
import liked from "../Assets/liked.svg"
import toLike from "../Assets/toLike.svg"

const GlobalState = (props) => {
  // Estado para setar filme que está sendo procurado
  const [searchedMovie, setSearchedMovie] = useState("")

  // Estado com os resultados da pesquisa por filme
  const [listOfMovies, setListOfMovies] = useState([])

  // Estado com os filmes que foram curtidos
  const [likedMovies, setLikedMovies] = useState([])

  // Função que pega detalhes do filme para página de detalhes
  const [movieDetail, setMovieDetail] = useState([])

  // Função para mudar estado de acordo com o filme que está sendo procurado
  const onChangeSetSearchedMovie = (event) => {
    setSearchedMovie(event.target.value)
  }

  // Função para limpar value do input quando o usuário clica no logo da galflix
  const cleanSearchedMovies = () => {
    setSearchedMovie("")
  }
  // Request dos filmes que estão sendo procurados na API
  const getSearchedMovies = (movie) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=9332a4f4&s=${movie}`)
      .then((resposta) => {
        setListOfMovies(resposta.data.Search)
      })
      .catch((err) => {
        alert(err.message);
      });
  };

   // Requisição para renderizar detalhes do filme na tela
  const getMovieById = (id) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=9332a4f4&i=${id}`)
      .then((resposta) => {
       
        setMovieDetail(resposta.data)
        console.log(resposta.data)
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  
  // Função que inclui filme no estado de filmes curtidos quando o card do filme é clicado
  const onClickLike = (movie) => {
    let newLikedMovies = [...likedMovies]
    let movieAlreadyExists = false
    newLikedMovies.map((film)=>{
        if(film.imdbID === movie.imdbID){
            movieAlreadyExists = true
        }
    })
    if(movieAlreadyExists===false){
        newLikedMovies.push(movie)
        setLikedMovies(newLikedMovies)
    }else if(movieAlreadyExists===true) {
      let index = newLikedMovies.indexOf(movie)
      newLikedMovies.splice(index,1)
      setLikedMovies(newLikedMovies)

    }
}
  //Fução para renderizar coração dependendo se o filme foi curtido ou não
  const renderLikedHeart = (id) => {
    let render = false
    states.likedMovies.map((film)=>{
      if(film.imdbID === id){
          render = true
      }
  })
  if(render===true){
      return (
          <img src={liked} onClick={()=>functions.onClickLike(states.movieDetail)}/>
      )
  
  } else{
      return (
          <img src={toLike} onClick={()=>functions.onClickLike(states.movieDetail)}/>
      )
  }
}
  
  const onClickSearchGal = () =>{
    setSearchedMovie("gal")
  }
   
  
    const states = {searchedMovie, listOfMovies, likedMovies, movieDetail};
    const requests = {getSearchedMovies, getMovieById};
    const setters = {setSearchedMovie, setListOfMovies, setLikedMovies, setMovieDetail};
    const functions = {onChangeSetSearchedMovie, onClickLike, cleanSearchedMovies, renderLikedHeart, onClickSearchGal}
  
    const data = { states, setters, requests, functions };
    return (
      <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;