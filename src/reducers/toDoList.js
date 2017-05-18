import { ActionTypes } from "../constants";
import { tools } from "../resources";
import { handleActions } from "redux-actions";

const mockData = [{
    id: 0,
    title: "category 0",
    type: "cotegory",
    items: [
        {
            id: 0,
            type: "toDo",
            title: "ro-do item 0.0",
            done: false,
        },
        {
            id: 1,
            title: "ro-do item 0.1",
            done: false,
        },
        {
            id: 2,
            title: "ro-do item 0.2",
            done: false,
        }
    ]

}, {
    id: 1,
    title: "category 1",
    type: "cotegory",
    items: [
        {
            id: 0,
            type: "toDo",
            title: "ro-do item 1.0",
            done: false,
        },
        {
            id: 1,
            type: "toDo",
            title: "ro-do item 1.1",
            done: false,
        },
        {
            id: 2,
            type: "toDo",
            title: "ro-do item 1.2",
            done: false,
        }
    ]

}];

const defaultState = {
    data: mockData
};

export default handleActions({
    [ActionTypes.toDoList.check]: (state, { payload }) => ({ ...state, data: payload }),
}, defaultState);
