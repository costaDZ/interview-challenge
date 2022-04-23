import uuid from 'react-uuid';

export const addIdToRobots = (state, payload) => {
    payload.data.map(item => {
        item.id = uuid();
        if (!state.materials.includes(item.material)) {
            state.materials.push(item.material)
        }
    }
    );
};


export const filterRobots = (state) => {
    state.filtredRobots = [];

    state.robots.map((robot) => {
        if (robot.material in state.filterKeys) {
            state.filtredRobots.push(robot);
        }
    });
};


export const getTargetRobot = (list, id) => {
    return list.find(item => item.id === id);
};