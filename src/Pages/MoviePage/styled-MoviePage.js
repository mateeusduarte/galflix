import styled from "styled-components";
import breakpoint from '../../Constants/breakpoints'

export const MoviePageContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    @media only screen and ${breakpoint.device.cel}{
    width:40vw;
    height:40vh;
  }
    width: 30vw;
    height: 70vh;
  }
`;

export const FlexContent = styled.main`
@media only screen and ${breakpoint.device.cel}{
    margin-top:35vh;
  }
  display: flex;
  flex-direction: column;
 
  width: 40vw;
`;
export const BackIcon = styled.div`
  img {
    height: 3vh;
    width: 5vw;
    cursor: pointer;
  }
`;

export const FlexDateTime = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 2vw;
  }
  img {
    height: 4.5vh;
    width: 4.5vh;
  }
`;

export const TitleContainer = styled.div`
@media only screen and ${breakpoint.device.cel}{
    font-size:1em;
    width:25vw;
  }
  display: flex;
  flex-wrap: wrap;
  width: 35vw;
  font-size: 1.5em;
`;
export const FlexRate = styled.div`
@media only screen and ${breakpoint.device.cel}{
    flex-direction:column;
    align-items: flex-start;

  }
  display: flex;
  
  align-items: center;
  img {
    height: 3vh;
    width: 3vh;
  }
  p {
    font-size: 0.7em;
    margin-left: 1vw;
  }
  div:nth-child(3) {
    border: none;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    border: 0.5px solid rgba(192, 192, 192, 0.4);
    border-radius: 10px;
    height: 3vh;
    margin-right: 2vw;
    width: 8vw;
    @media only screen and ${breakpoint.device.cel}{
    width:20vw;
    margin-bottom:2vh;

  }
  }
`;

export const FlexCastGenreDirector = styled.div`

  display: flex;
  width: 100%;
  p {
    padding-left: 0;
    font-size: 0.8em;
  }
  strong,
  h3 {
    color: rgba(192, 192, 192, 0.8);
    font-size: 0.8em;
  }
  div {
    width: 11vw;
    margin-right: 1vw;
    @media only screen and ${breakpoint.device.cel}{
      margin-right: 12vw;

  }
  }
`;

export const PlotContainer = styled.div`
  font-size: 0.8em;
  strong {
    color: rgba(192, 192, 192, 0.8);
    font-size: 0.8em;
  }
  display: flex;
  flex-wrap: wrap;
  width: 35vw;
  font-size: 1em;
`;
