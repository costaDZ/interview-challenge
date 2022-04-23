
import { HandlerContainer } from './styles';


const ErrorHandler = ({ errorMsg }) => {
    return (
        <HandlerContainer>
            <h1>{errorMsg}</h1>
        </HandlerContainer>
    )
}

export default ErrorHandler