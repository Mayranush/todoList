function filter() {
    let cloneState = function (state) {
        let newState = [];

        state.map((item, i) => {
            newState.push(Object.assign({}, item));
            newState[i].items = [];
            item.items.map(elem => {
                newState[i].items.push(Object.assign({}, elem))
            })
        })

        return newState;
    };
    return {
        cloneState: cloneState
    }
}


export default filter();