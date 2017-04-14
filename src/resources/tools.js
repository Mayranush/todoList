function filter() {
    let cloneState = function (state) {
        let newState = [];
        for (let i = 0; i < state.length; i++) {
            newState.push(Object.assign({}, state[i]));
            newState[i].items = [];
            for (let j = 0; j < state[i].items.length; j++) {
                newState[i].items.push(Object.assign({}, state[i].items[j]))
            }
        }
        return newState;
    };


    return {
        cloneState: cloneState
    }
}


export default filter();