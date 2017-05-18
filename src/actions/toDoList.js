import { createAction } from "redux-actions";
import ActionTypes from "../constants/ActionTypes";
import store from 'store';
import { tools } from "../resources";

const getDataRequest = createAction(ActionTypes.toDoList.check);

export function checkToDoItem(item) {
    return (dispatch) => {
        let cotegoryId = item.cotegoryId;
        let itemId = item.itemId;
        let newState = tools.cloneState(store.getState().toDoList.data);
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

        return dispatch(getDataRequest(newState))
    };
}

