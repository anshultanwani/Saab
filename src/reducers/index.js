const initialState = {
    countryData: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_INITIAL_DATA' : {
            return {
                ...state,
                countryData: [...action.payload]
            }
        }
        case 'UPDATE_COUNTRY': {
            return {
                ...state,
                countryData: [...state.countryData,action.payload]
            }
        }
        default: {
            return state;
        }
    }
};