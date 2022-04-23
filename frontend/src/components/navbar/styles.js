import styled from 'styled-components';
import { AppBar } from '@mui/material';
import Badge from '@mui/material/Badge';

export const MyAppBar = styled(AppBar)`
    padding: 0.5em 5em;
    background-color:white;
    display: flex ;
    flex-direction:row;
    justify-content: space-between;
    align-items:center ;

    img {
        object-fit: cover;
    }

    @media (max-width: 768px) {
        padding: .5em 1em;
    }
`

export const MyBadge = styled(Badge)`
    & .MuiBadge-badge {
        position: relative ;
        right: 34px;
        top: 13px;
        border: 2px solid white;
        padding: 0 4px;
        background-color:red ;
        color:white ;
    }
`;