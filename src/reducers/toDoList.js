import { ActionTypes } from "../constants";

const mockData = [{
    id: 0,
    title: "ro-do item 1",
    done: false
}, {
    id: 1,
    title: "ro-do item 2",
    done: false
}, {
    id: 2,
    title: "ro-do item 3",
    done: false
}];

export default (state = mockData, action) => {
    switch (action.type) {
        case ActionTypes.toDoList.check:
            let id = action.payload.id;
            let newState = [];
            for (let i = 0; i < state.length; i++) {
                newState.push(Object.assign({}, state[i]))
            }
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === +id) {
                    newState[i].done = !newState[i].done;
                    break;
                }
            }
            return newState;
        default:
            return state;
    }
};