const initialState = {
    suggestions: [],
    mostcooked: [] , 
    homeslider:[] ,
    mypreferences:[]
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