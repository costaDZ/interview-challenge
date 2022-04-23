import styled from 'styled-components';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


export const MainContainer = styled.section`
    border:1px solid grey ;
    margin: 1em 0;
    background-color:white;
    border-radius:5px ;
    padding: 1em ;
    text-align: center;

    h2{
        text-align: justify;
        color: #7f7f7f;
    }
`;

export const HandlerContainer = styled.section`
    min-height:100vh;
    display:flex ;
    align-items:center;
    justify-content:center ;
`;

export const MyCart = styled(Card)`
    .css-o69gx8-MuiCardMedia-root {
        object-fit:contain ;
    }
`;

export const MyButton = styled(Button)`
    border-radius: 40px;
    font-weight: bold;
    padding: 6px 10px;
    margin: 1em auto;
    display: flex;
`;

