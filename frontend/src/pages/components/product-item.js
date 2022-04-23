import { useDispatch } from 'react-redux';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { priceFormater, dateFormater } from '../../utils/formatters';
import { addToCart } from '../../redux/robots-slices';
import { ContentItem } from '../../components';
import { MyCart, MyButton } from './styles';


const RobotItem = ({
    name,
    image,
    price,
    stock,
    createdAt,
    material,
    id }) => {

    const dispatch = useDispatch();

    return (
        <MyCart >
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />

            <CardContent>
                <h3>{name}</h3>

                <ContentItem
                    title="Creation Date"
                    content={dateFormater(createdAt)}
                />

                <ContentItem
                    title="Price"
                    content={priceFormater.format(price)}
                />

                <ContentItem
                    title="Rest in the stock"
                    content={stock}
                />

                <ContentItem
                    title="Material"
                    content={material}
                />
            </CardContent>

            <MyButton
                size="small"
                variant='contained'
                disabled={!stock && true}
                endIcon={<AddShoppingCartIcon />}
                onClick={() => dispatch(addToCart(id))}
            >Add to Cart
            </MyButton>

        </MyCart>
    )
}

export default RobotItem;