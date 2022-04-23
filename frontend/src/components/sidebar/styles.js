import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';


export const MyDrawer = styled(Drawer)`
    position:relative ;

    .MuiPaper-root {
        //width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-x: hidden;

    }
    @media(max-width: 568px)  {
            .MuiPaper-root{
            width: 100%;
            }
    } 
`

export const DraweContent = styled.div`
    padding: .5em ;
    flex:1 ;
`

export const DrawerFooter = styled.div`
    display:flex ;
    justify-content: space-between;
    margin: 1em 0 ;

    .total-price ,.total-amount {
        p {
            margin:.4em ;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        background: #80808069;
        border-radius: 50px;
        padding: 2px 0.5em; 
    }
`


export const MyCart = styled(Card)`
    margin:.5em 0 ;
    border: 2px solid #c1c1c1;
    box-shadow: 1px 1px 4px 1px #b2b2b2;
    width: 100%;
    width: 400px;

    .css-o69gx8-MuiCardMedia-root {
        object-fit:contain ;
    }
`;


export const PriceContainer = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;

    strong {
        background-color: #3494f3a1;
        padding:.5em 1em ;
        border-radius:50px;
        margin:0 .5em ;
        font-size : 1em;
    }

    button {
        padding:.5em 1em ;
        border-radius:50px;
        margin:0 .5em ;
        cursor: pointer;
    }
`