
const initialState = {
    age: 21
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'ADD':
            newState.age += action.payload;
            break;
        case 'SUB':
            newState.age -= action.payload;
            break;
    }

    return newState;


}

export default reducer;