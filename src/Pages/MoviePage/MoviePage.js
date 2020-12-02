import {
  FlexCastGenreDirector,
  FlexContent,
  FlexDateTime,
  FlexRate,
  InfoContainer,
  MoviePageContainer,
  PlotContainer,
  TitleContainer,
  BackIcon,
} from "./styled-MoviePage";
import { useHistory, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import goBackIcon from "../../Assets/goBackIcon.svg";
import { goBack } from "../../Router/Coordinator";

export function MoviePage() {
  const history = useHistory();
  const pathParams = useParams();
  const { states, requests, functions } = useContext(GlobalStateContext);

  useEffect(() => {
    // Requisição para renderizar detalhes do filme na tela
    requests.getMovieById(pathParams.id);
  }, []);

  return (
    <MoviePageContainer>
      <FlexContent>
        <BackIcon>
          <img src={goBackIcon} onClick={() => goBack(history)} />
        </BackIcon>
        <FlexDateTime>
          <p>{states.movieDetail.Runtime}</p>
          <p>{states.movieDetail.Year}</p>
        </FlexDateTime>
        <TitleContainer>
          <h1>{states.movieDetail.Title}</h1>
        </TitleContainer>
        <FlexRate>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" />
            <p>
              {states.movieDetail.Ratings
                ? states.movieDetail.Ratings[0]
                  ? states.movieDetail.Ratings[0].Value
                  : "None"
                : "None"}
            </p>
          </div>
          <div>
            <img src="https://pbs.twimg.com/profile_images/1145693812464816128/9ZMAMaoT_400x400.png" />
            <p>
              {states.movieDetail.Ratings
                ? states.movieDetail.Ratings[1]
                  ? states.movieDetail.Ratings[1].Value
                  : "None"
                : "None"}
            </p>
          </div>
          <div>{functions.renderLikedHeart(pathParams.id)}</div>
        </FlexRate>
        <PlotContainer>
          <p>
            <strong>Enredo</strong>
            <br></br>
            <br></br>
            {states.movieDetail.Plot}
          </p>
        </PlotContainer>
        <FlexCastGenreDirector>
          <div>
            <h3>Cast</h3>
            <p>{states.movieDetail.Actors}</p>
          </div>
          <div>
            <h3>Genre</h3>
            <p>{states.movieDetail.Genre}</p>
          </div>
          <div>
            <h3>Diretor</h3>
            <p>{states.movieDetail.Director}</p>
          </div>
        </FlexCastGenreDirector>
      </FlexContent>
      <img src={states.movieDetail.Poster} />
    </MoviePageContainer>
  );
}
