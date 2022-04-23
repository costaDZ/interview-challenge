import { useSelector, useDispatch } from 'react-redux';

import Chip from '@mui/material/Chip';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import { MainContainer } from './styles';
import { handelFilter } from '../../redux/robots-slices';

const FilterSection = () => {

    const materials = useSelector(state => state.robotsSlice.materials);
    const filterKeys = useSelector(state => state.robotsSlice.filterKeys);
    const dispatch = useDispatch();

    return (
        <MainContainer>
            <h2>Filter</h2>
            {
                materials.map(material =>
                    <Chip
                        key={material}
                        sx={{ margin: " 5px" }}
                        color="primary"
                        variant={(material in filterKeys) ? "filled" : "outlined"}
                        label={material}
                        icon={<SmartToyIcon />}
                        onClick={() => dispatch(handelFilter(material))}
                    />)
            }
        </MainContainer>
    )
}

export default FilterSection;