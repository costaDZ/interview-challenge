import React from 'react';
import { useDispatch } from 'react-redux';

import { MyBadge } from './styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBarCart = ({ cartItems, toggleDrawer }) => {

    const dispatch = useDispatch();

    return (
        <MyBadge badgeContent={cartItems.length} >
            <IconButton
                color="primary"
                aria-label="visite shopping cart"
                onClick={() => dispatch(toggleDrawer())}
            >

                <ShoppingCartIcon
                    color='primary'
                    sx={{ fontSize: "1.5em" }}
                />

            </IconButton>
        </MyBadge>
    )
}

export default NavBarCart;