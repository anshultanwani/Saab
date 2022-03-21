const initialState = {
    suggestions: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_INITIAL_DATA' : {
            return {
                ...state,
                suggestions: [...action.payload]
            }
        }
        default: {
            return state;
        }
    }
};