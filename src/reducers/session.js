const initialState = {
    loggedUser: {},
    isLoggedIn: false,
    showFeedback: true ,
    reqStatus: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SESSION': {
            return {
                ...state,
                ...action.payload   
            }
        }
        case 'TOGGLE_FEEDBACK': {
            return {
                ...state,
                showFeedback: action.payload.show
            }
        }
        default: {
            return state;
        }
    }
}