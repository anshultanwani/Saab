const initialState = {
    cartList: [{
        name: 'Potato',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        image: "images/Potato-veggie.png",
        category: 'veggies'
    },
    {
        name: 'Onion',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        image:"images/Onion.png",
        category: 'veggies'
    },
    {
        name: 'Capsium',
        quantity: 1,
        minQty: '500 gram',
        actualPrice: 50,
        price: 60,
        image:"images/Capcicum.png",
        category: 'veggies'
    },
    {
        name: 'Banana',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        image:"images/Capcicum.png",
        category: 'fruits'
    },
    {
        name: 'Papaya',
        quantity: 1,
        minQty: '1 kg',
        actualPrice: 50,
        price: 60,
        image:"images/Capcicum.png",
        category: 'fruits'
    },
    {
        name: 'Watermelon',
        quantity: 1,
        minQty: '500 gram',
        actualPrice: 50,
        price: 60,
        image:"images/Capcicum.png",
        category: 'fruits'
    }],
    deliveryCharges: 60,
    highDemandCharges: 50,
    stockCat : {
        "fruits":
        {
            displayName:"Fruits",
            displayImage:"images/manageveggies/Fruits.png" ,
            list: [
                {
                    "name":"apple",
                    "image":"images/manageveggies/apple.png",
                    "price": "300"
                },
                {
                    "name":"Grapes",
                    "image":"images/manageveggies/grapes.png",
                    "price": "200"
                }, 
                {
                    "name":"banana",
                    "image":"images/manageveggies/banna.png",
                    "price": "200"
                },
                {
                    "name":"Dragon Fruit",
                    "image":"images/manageveggies/dragon-fruit.png",
                    "price": "200"
                },
            ],
        },
        "veggies":
        {
            displayName:"Vegetables",
            displayImage:"images/manageveggies/vegetables.png" ,
            list: [
                {
                    "name":"Onion",
                    "image":"images/manageveggies/Onion.png",
                    "price": "300"
                },
                {
                    "name":"Potato",
                    "image":"images/manageveggies/Potato-veggie.png",
                    "price": "200"
                },
                {
                    "name":"Tomato",
                    "image":"images/manageveggies/Capcicum.png",
                    "price": "200"
                },
            ],
        },
        "grocery":
        {
            displayName:"Grocery",
            displayImage:"images/manageveggies/Grocery.png" ,
            list: [
                {
                    "name":"Soap",
                    "image":"images/manageveggies/vegetables.png",
                    "price": "300"
                },
                {
                    "name":"Milk",
                    "image":"images/manageveggies/vegetables.png",
                    "price": "200"
                },
                {
                    "name":"curd",
                    "image":"images/manageveggies/vegetables.png",
                    "price": "200"
                },
            ],
        }
    }
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