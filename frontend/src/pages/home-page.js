import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CssBaseline from '@mui/material/CssBaseline';

import { MyContainer, GridContainer } from './styles';
import { SideBar, AlertDialogSlide } from '../components';
import { fetchRobots } from '../redux/robots-slices/robots-thunks';
import {
    Loader,
    FilterSection,
    RobotItem,
    ErrorHandler
} from './components';


const HomePage = () => {

    const dispatch = useDispatch();

    const {
        robots,
        filtredRobots,
        isloading,
        errorMsg
    } = useSelector(state => state.robotsSlice);

    const displayedRobots = filtredRobots.length ? filtredRobots : robots;

    useEffect(() => {
        dispatch(fetchRobots());
    }, [dispatch]);


    if (isloading) {
        return (
            <Loader />
        )
    }

    if (errorMsg) {
        return (
            <ErrorHandler
                errorMsg={errorMsg}
            />
        )
    }

    return (
        <MyContainer>
            <CssBaseline />
            <AlertDialogSlide />
            <SideBar />
            <FilterSection />
            <GridContainer>
                {displayedRobots.map(robot => <RobotItem
                    key={robot.id}
                    {...robot}
                />)}
            </GridContainer>
        </MyContainer>
    )
}

export default HomePage