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
                    "image":"images/apple.png",
                    "price": "300",
                    "actualPrice":"240"
                },
                {
                    "name":"Grapes",
                    "image":"images/grapes.png",
                    "price": "200",
                    "actualPrice":"180"
                }, 
                {
                    "name":"banana",
                    "image":"images/banna.png",
                    "price": "200",
                    "actualPrice":"190"
                },
                {
                    "name":"Dragon Fruit",
                    "image":"images/dragon-fruit.png",
                    "price": "200",
                    "actualPrice":"195"
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
                    "image":"images/Onion.png",
                    "price": "300",
                    "actualPrice":"240"
                },
                {
                    "name":"Potato",
                    "image":"images/Potato-veggie.png",
                    "price": "200",
                    "actualPrice":"180"
                },
                {
                    "name":"Tomato",
                    "image":"images/Capcicum.png",
                    "price": "200",
                    "actualPrice":"195"
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
                    "image":"images/Capcicum.png",
                    "price": "300",
                    "actualPrice":"240"
                },
                {
                    "name":"Milk",
                    "image":"images/Capcicum.png",
                    "price": "200",
                    "actualPrice":"195"
                },
                {
                    "name":"curd",
                    "image":"images/Capcicum.png",
                    "price": "200",
                    "actualPrice":"195"
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