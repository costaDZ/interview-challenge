import styled from 'styled-components';


export const MyContainer = styled.main`
    padding:6em 5em 3em;
    min-height:100vh ;
    background-image: linear-gradient(to right,#2e385b 23%,#2575fc 100%);

    @media(max-width: 992px)  {
        padding: 6em 1em 1em;
    }
`;
export const GridContainer = styled.section`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: .5em;
    align-items: center ;
    margin:auto ;

    @media(max-width: 1200px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media(max-width: 992px)  {
        grid-template-columns: repeat(2,1fr);
    }

    @media(max-width: 568px)  {
        grid-template-columns: repeat(1,1fr);
    }
`;