import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    background-image: url(${(props) => props.poster});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:top center;
    position:relative;
    height:30vh;
    width: 10vw;
    margin: 2vh;
    cursor:pointer;
    h3{
        color:white;
        font-size:.8em;
        margin-bottom:0;
        opacity:0;
        margin-left:1vw;
    }
    p{
        font-size:.5em;
        opacity:0;
        margin-left:1vw;
    }
    div{
        width:100%;
        display:flex;
        justify-content:flex-end;
        align-items:flex-start;
        height:75%;
    }
    img{
        height:2vh;
        margin-right:.5vw;
        margin-top:.5vh;
        
    }
    :hover{
        background-image: none;
       
        h3{
            opacity:1;
        }
        p{
            opacity:1;
        }
        &::after{
            content:'';
            background-image: url(${(props) => props.poster});
            height:25vh;
            position:absolute;
            top:0px;
            right:0px;
            bottom:0px;
            left:0px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position:top center;
            opacity:.3;
        }
    :active{
        opacity:.7  ;
    }
        
    }
   `
