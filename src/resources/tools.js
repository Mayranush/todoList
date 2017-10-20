function filter() {
  let newIdCat = 3;
  let newIdTodo = 12;
  let newIdForChildCat = 3;

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

  let idGeneratorForCat = function () {
    return newIdCat++;
  };

  let idGeneratorForTodo = function () {
    return newIdTodo++;
  };

  let idGeneratorForCatChild = function() {
    return newIdForChildCat++;
  }

  return {
    cloneState: cloneState,
    idGeneratorForCat: idGeneratorForCat,
    idGeneratorForTodo: idGeneratorForTodo,
    idGeneratorForCatChild: idGeneratorForCatChild
  }
}


export default filter();