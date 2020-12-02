import { CardContainer} from "./styled-CardMoviesHome";
import { useContext} from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";


export function CardMoviesHome(props){
    const { functions} = useContext(GlobalStateContext)
    
   
    return(
        <CardContainer poster={props.poster} onClick={props.onClick}>
            <div>{functions.renderLikedHeart(props.id)}</div>
            <h3 >{props.title}</h3>
            <p>{props.year}</p>
            
        </CardContainer>
    )
}