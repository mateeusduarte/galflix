import styled from "styled-components";

export const HomeContainer = styled.div` 
    height:100vh;
    align-items:center;
    p{
        color:white;
    }
    
    `
export const InputContainer = styled.nav`
    display:flex;
    margin:3vh 0 -3vh 2vw;
    align-items:center;
    margin-left:2vw;
    input{
        width:80vw;
        height:3vh;
        border:none;
        border-radius:5px;
        border-radius:5px;
        padding-left:2vw;
        :focus{
            outline:none;
        }
    }
    img{
        height:3vh;
        margin-right:2vw;
        cursor:pointer;
    }
    ` 
export const EmptySearchContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:auto;
    margin-top:30vh;
    align-items:center;
    
    img{
        width:20vw;
    }
    p{
        margin-top:10vh;
        color:white;
        
    }
    a{
        color:gray;
        :hover{
            cursor:pointer;
            color:darkgray;
        }
        :active{
            color:white;
        }
    }`
export const FlexMovies = styled.main` 
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:90%;
    margin:auto;
    margin-top:4vh;
    `