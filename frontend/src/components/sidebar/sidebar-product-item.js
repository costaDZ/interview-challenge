import { useDispatch } from 'react-redux';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { MyCart, PriceContainer } from './styles'
import { priceFormater } from '../../utils/formatters';
import {
    increaseCartItemAmount,
    decreaseCartItemAmount
} from '../../redux/robots-slices';
import ContentItem from '../cart/content-item';

const SideBarProductItem = ({
    name,
    image,
    price,
    stock,
    quantity,
    id }) => {

    const dispatch = useDispatch();

    return (
        <MyCart>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />


            <CardContent sx={{ padding: "0 16px" }}>
                <ContentItem
                    title="Total Price"
                    content={priceFormater.format(+price * quantity)}
                />
            </CardContent>

            <CardActions>
                <PriceContainer>
                    <h3>Total Amount : </h3>

                    <button
                        onClick={() => dispatch(decreaseCartItemAmount(id))}
                    > - </button>

                    <strong>{quantity}</strong>

                    <button
                        onClick={() => dispatch(increaseCartItemAmount(id))}
                        disabled={!stock && true}
                    > + </button>
                </PriceContainer>

            </CardActions>
        </MyCart>
    )
}

export default SideBarProductItem;