const mockData = [{
    id: 1,
    title: "ro-do item 1",
    done: false
}, {
    id: 2,
    title: "ro-do item 2",
    done: false
}, {
    id: 3,
    title: "ro-do item 3",
    done: false
}];

export default (state = mockData, action) => {
    switch (action.type) {
        default:
            return state;
    }
};