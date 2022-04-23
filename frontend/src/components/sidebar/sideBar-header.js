import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SideBarHeader = ({ toggleDrawer }) => {

    const dispatch = useDispatch();

    return (
        <DrawerHeader>
            <IconButton
                onClick={() => dispatch(toggleDrawer())}
            >
                <CloseIcon color='primary' sx={{ fontSize: 30 }} />
            </IconButton>
            <Divider />
        </DrawerHeader>
    )
}
const DrawerHeader = styled.div`
`
export default SideBarHeader