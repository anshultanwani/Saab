const initialState = {
    feedbackDrawer: false,
    addMemberDrawer: true,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_SLIDER_DRAWERS': {
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