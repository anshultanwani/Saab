export const setInitialData = payload => ({
    type: 'SET_INITIAL_DATA',
    payload
});

export const updateCountry = payload => ({
    type: 'UPDATE_COUNTRY',
    payload
});

export const toggleSliderDrawer = payload => ({
    type: 'TOGGLE_SLIDER_DRAWERS',
    payload
})

export const updateOrderStatus = payload => ({
    type: 'UPDATE_ORDER_STATUS',
    payload
})

export const setSession = payload => ({
    type: 'SET_SESSION',
    payload
})

export const updateUserAddress = payload => (dispatch) => {
    dispatch({
        type: 'UPDATE_USER_ADDRESS',
        payload
    })
}




export const updateCart = payload => (dispatch) => {
    dispatch({
        type: 'UPDATE_CART',
        payload
    })
}
