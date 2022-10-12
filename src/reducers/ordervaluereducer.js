const initialState = {
    orderId:"",
    orderStatus: "" ,
    orderData:null
}

export const orderReducer = (state = initialState , action) => {
    switch(action.type){
        case 'SET_ORDER_STATUS' : 
            return {
                ...state ,
                orderId: action.orderId,
                orderStatus: action.orderStatus ,
                orderData: action.payload
            } 
            default: 
                return state;             
    }
}

