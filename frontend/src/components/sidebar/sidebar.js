import { useSelector } from 'react-redux';

import { toggleDrawer } from '../../redux/robots-slices';
import SideBarProductItem from './sidebar-product-item';
import { priceFormater } from '../../utils/formatters';
import SideBarHeader from './sideBar-header';
import { DraweContent, DrawerFooter, MyDrawer } from './styles';


const SideBar = () => {

    const {
        drawerShown,
        cartItems,
        totalPrice,
        totalAmount
    } = useSelector(state => state.robotsSlice);

    return (
        <MyDrawer
            variant="persistent"
            anchor="right"
            open={drawerShown}
        >
            <SideBarHeader
                toggleDrawer={toggleDrawer}
            />

            <DraweContent>
                {
                    cartItems.map(item =>
                        <SideBarProductItem
                            key={item.id}
                            {...item}
                        />
                    )
                }

            </DraweContent>

            <DrawerFooter>
                <div className="total-amount">
                    <p>Total Amount : </p>
                    <strong>{totalAmount}</strong>
                </div>
                <div className="total-price">
                    <p>Total price : </p>
                    <strong> {priceFormater.format(totalPrice)}</strong>
                </div>
            </DrawerFooter>
        </MyDrawer>
    )
}

export default SideBar;