const initialState = {
    cartList: [{
        name: 'Potato',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        category: 'veggies'
    },
    {
        name: 'Onion',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        category: 'veggies'
    },
    {
        name: 'Capsium',
        quantity: 1,
        minQty: '500 gram',
        actualPrice: 50,
        price: 60,
        category: 'veggies'
    },
    {
        name: 'Banana',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        category: 'fruits'
    },
    {
        name: 'Papaya',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        category: 'fruits'
    },
    {
        name: 'Watermelon',
        quantity: 1,
        minQty: '500 gram',
        actualPrice: 50,
        price: 60,
        category: 'fruits'
    }],
    deliveryCharges: 60,
    highDemandCharges: 50
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CART_DATA': {
            return {
                ...state,
                ...action.payload   
            }
        }
        case 'UPDATE_CART': {
            return {
                ...state,
                cartList: action.payload
            }
        }
        default: {
            return state;
        }
    }
}