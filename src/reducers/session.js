const initialState = {
    loggedUser: {},
    isLoggedIn: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SESSION': {
            return {
                ...state,
                ...action.payload   
            }
        }
        default: {
            return state;
        }
    }
}