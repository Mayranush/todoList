import { ActionTypes } from "../constants";
import { tools } from "../resources";

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

export default (state = mockData, action) => {
    switch (action.type) {
        case ActionTypes.toDoList.check:

            let cotegoryId = action.payload.cotegoryId;
            let itemId = action.payload.itemId;
            let newState = tools.cloneState(state);
            
            newState.map(item => {
                if (item.id === +cotegoryId) {
                    item.items.map(itemElem => {
                        if (itemElem.id === +itemId) {
                            itemElem.done = !itemElem.done;
                            return
                        }
                    })
                }
            })

            return newState;
        default:
            return state;
    }
};