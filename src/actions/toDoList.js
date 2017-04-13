import { createAction } from "redux-actions";
import ActionTypes from "../constants/ActionTypes";


const checkToDoItemAction = createAction(
    ActionTypes.toDoList.check
);

export { checkToDoItemAction };
