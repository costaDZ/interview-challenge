import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { hideAlert } from '../../redux/robots-slices/robots-slices';


const AlertDialogSlide = () => {

    const showAlert = useSelector(state => state.robotsSlice.showAlert)
    const dispatch = useDispatch();

    return (
        <Dialog
            open={showAlert}
            keepMounted
            onClose={() => dispatch(hideAlert())}
        >
            <DialogTitle>Alert</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    You can't add more then <strong>5</strong>  diffrent robots in your cart.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(hideAlert())}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}


export default AlertDialogSlide;