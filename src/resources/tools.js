function filter() {
  let cloneState = function (state) {
    let newState = [];

    state.map((item, i) => {
      newState.push(Object.assign({}, item));
      newState[i].items = [];
      item.items.map(elem => {
        newState[i].items.push(Object.assign({}, elem))
      })
    });


    return newState
  };
  let idGenerator = function () {
    return Math.random().toString(36).substring(7);
  };

  return {
    cloneState: cloneState,
    idGenerator: idGenerator
  }
}


export default filter();