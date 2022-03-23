const initialState = {
    suggestions: [],
    mostcooked: [] , 
    homeslider: [],
    favchannel: [],
    mypreferences:[] ,
    manageveggies:[]
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_INITIAL_DATA' : {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
};