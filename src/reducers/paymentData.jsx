const initialState = {
    history: [{
        ownername: "Derek Doe",
        amount: 2000,
        date: "10 May 2020",
        image: "images/owner1.png"
    },
    {
        ownername: "John",
        amount: 2200,
        date: "12 May 2020",
        image: "images/owner2.png"
    },
    {
        ownername: "Hens",
        amount: 2400,
        date: "13 May 2020",
        image: "images/owner3.png",
    },
    {
        ownername: "Hens",
        amount: 3400,
        date: "15 May 2020",
        image: "images/owner4.png",
    }
    ],
    ownerPayment: {
        "owner1":
        {
            name: "Hans Brown",
            image: "images/owner1.png",
            list: {
               "monthly Agreed Amt":"3000",
                "working days":"5000"
            }
              
        },
        "owner2":
        {
            name: "Alex Methew",
            image: "images/owner2.png",
            list: {
                "monthly Agreed Amt":"3000",
                "working days":"6000"
            }
        },
        "owner3":
        {
            name: "Derel Deo",
            image: "images/owner3.png",
            list: {
                "monthly Agreed Amt":"3000",
                "working days":"7000"
            }
        },
        "owner4":
        {
            name: "Callie",
            image: "images/owner4.png",
            list: {
                "monthly Agreed Amt":"3000",
                "working days":"7000"
            }
        }
    }

}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART_DATA': {
            return {
                ...state,
                ...action.payload
            }
        }
        case 'UPDATE_CART': {
            return {
                ...state,
                cartList: [...action.payload]
            }
        }
        default: {
            return state;
        }
    }
}