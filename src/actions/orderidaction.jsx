import axios from "axios";
export const orderIdAction = (userId) =>{
    return dispatch => {
        axios.get(window.apiDomain + "/v1/orders?userId=" + userId)
        .then((res)=>{
            dispatch({type:'SET_ORDER_STATUS', payload:res.data.data[0]})
        })
}
}


