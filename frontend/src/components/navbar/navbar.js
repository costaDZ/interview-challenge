import { useSelector } from 'react-redux';

import { MyAppBar } from './styles';
import NavBarCart from './navbar-cart';
import { toggleDrawer } from '../../redux/robots-slices';
import LOGO from '../../assets/images/robot-logo.png';


const Navbar = () => {

    const cartItems = useSelector(state => state.robotsSlice.cartItems);

    return (
        <MyAppBar>

            <img
                src={LOGO}
                alt="logo"
                width={70}
                height={70}
            />

            <NavBarCart
                cartItems={cartItems}
                toggleDrawer={toggleDrawer}
            />

        </MyAppBar>
    );
};

export default Navbar;
