import CircularProgress from '@mui/material/CircularProgress';
import { HandlerContainer } from "./styles"

const Loader = () => {
    return (
        <HandlerContainer>
            <CircularProgress />
        </HandlerContainer>
    )
}

export default Loader