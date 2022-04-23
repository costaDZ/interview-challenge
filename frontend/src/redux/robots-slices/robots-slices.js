import { createSlice } from '@reduxjs/toolkit';
import { fetchRobots } from './robots-thunks';

import {
    addIdToRobots,
    filterRobots,
    getTargetRobot
} from './robots-utils';

import { initialRobotsState } from './initial-state';


const robotsSlice = createSlice({
    name: "robots",
    initialState: initialRobotsState,
    reducers: {
        toggleDrawer: (state, action) => {
            state.drawerShown = !state.drawerShown;
        },
        addToCart: (state, { payload }) => {

            const { robots, cartItems } = state;
            const targetRobot = getTargetRobot(robots, payload);
            const robotFromCart = getTargetRobot(cartItems, payload);

            if (cartItems.length === 5 && !robotFromCart) {
                state.showAlert = true;
            } else {
                targetRobot.stock--;
                state.totalAmount++;
                state.totalPrice += +targetRobot.price;

                if (robotFromCart) {
                    robotFromCart.quantity++;
                } else {
                    state.cartItems.push({
                        id: payload,
                        quantity: 1,
                        ...targetRobot
                    });
                }
            }
        },
        hideAlert: (state, action) => {
            state.showAlert = false;
        },
        increaseCartItemAmount: (state, { payload }) => {

            const { robots, cartItems } = state;
            const targetRobot = getTargetRobot(robots, payload);
            const robotFromCart = getTargetRobot(cartItems, payload);;

            if (targetRobot.stock > 0) {
                robotFromCart.quantity++;
                robotFromCart.stock--;
                targetRobot.stock--;
                state.totalAmount++;
                state.totalPrice += +robotFromCart.price;
            }
        },
        decreaseCartItemAmount: (state, { payload }) => {

            const { robots, cartItems } = state;
            const targetRobot = getTargetRobot(robots, payload);
            const robotFromCart = getTargetRobot(cartItems, payload);;

            state.totalPrice -= +robotFromCart.price;
            state.totalAmount--;

            if (robotFromCart.quantity > 1) {
                robotFromCart.quantity--;
                robotFromCart.stock++;
                targetRobot.stock++;
            } else if (robotFromCart.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== payload);
            }
        },
        handelFilter: (state, { payload }) => {

            const { filterKeys } = state;

            if (payload in filterKeys) {
                delete filterKeys[payload];
                filterRobots(state);
            } else {
                filterKeys[payload] = payload;
                filterRobots(state);
            }
        },

    },
    extraReducers: {
        [fetchRobots.pending]: (state, action) => {
            state.isloading = true;
        },
        [fetchRobots.fulfilled]: (state, { payload }) => {
            addIdToRobots(state, payload);
            state.robots = payload.data;
            state.isloading = false;
        },
        [fetchRobots.rejected]: (state, action) => {
            state.errorMsg = action.payload;
            state.isloading = false;
        }
    }
});


export const {
    toggleDrawer,
    addToCart,
    handelFilter,
    hideAlert,
    increaseCartItemAmount,
    decreaseCartItemAmount
} = robotsSlice.actions;

export default robotsSlice.reducer;


