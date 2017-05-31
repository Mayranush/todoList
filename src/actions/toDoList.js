import {createAction} from "redux-actions";
import ActionTypes from "../constants/ActionTypes";
import store from 'store';
import {tools} from "../resources";

const getDataRequest = createAction(ActionTypes.toDoList.check);

export function checkToDoItem(cotegoryId, itemId) {
  return (dispatch) => {
    let newState = tools.cloneState(store.getState().toDoList.data);
    newState.map(item => {
      if (item.id == cotegoryId) {
        item.items.map(itemElem => {
          if (itemElem.id === itemId) {
            itemElem.done = !itemElem.done;
            return
          }
        })
      }
    });

    return dispatch(getDataRequest(newState))
  };
}


const editData = createAction(ActionTypes.toDoList.edit);

export function editToDoItem(id, data) {

  return (dispatch) => {

    let cotegoryId = id.split("-")[0];
    let itemId = id.split("-")[1];
    let newState = tools.cloneState(store.getState().toDoList.data);

    newState.map(item => {
      if (item.id === cotegoryId) {
        item.items.map(itemElem => {
          if (itemElem.id === itemId) {
            itemElem.done = data.done;
            itemElem.title = data.title;
            itemElem.text = data.text;
            return
          }
        })
      }
    });

    return dispatch(editData(newState))
  };
}


const addCatResponse = createAction(ActionTypes.toDoList.addCat);

export function addCat(title) {

  return (dispatch) => {
    let newState = tools.cloneState(store.getState().toDoList.data);
    let newCat = {
      id: tools.idGenerator(),
      title: title,
      type: "cotegory",
      items: []
    };
    newState.push(newCat);

    return dispatch(addCatResponse(newState))
  };
}


const addTaskResponse = createAction(ActionTypes.toDoList.addTask);

export function addTask(catId, title) {

  return (dispatch) => {
    let newState = tools.cloneState(store.getState().toDoList.data);
    let newTask = {
      id: tools.idGenerator(),
      title: title,
      type: "toDo",
      done: false,
      text: "",
    };

    newState.filter(item => item.id === "" + catId)[0].items.push(newTask);
    return dispatch(addTaskResponse(newState))
  };
}


const deleteCatResponse = createAction(ActionTypes.toDoList.deleteCat);

export function deleteCat(catId) {
  console.log(catId);
  return (dispatch) => {
    let state = store.getState().toDoList.data;
    let newState = state.filter(function (obj) {
      return obj.id !== catId;
    });

    return dispatch(deleteCatResponse(newState))
  };
}

