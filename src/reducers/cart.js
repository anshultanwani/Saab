const initialState = {
    cartList: [    
  ],
    finalComboList:[
        {
            name:"alloo paratha",
            quantity:1
        }
    ],
    deliveryCharges: 60,
    highDemandCharges: 50,
    
    stockCat: {
        "fruits":
        {
            displayName: "Fruits",
            displayImage: "images/manageveggies/Fruits.png",
            list: [
                {
                    name: "Apple",
                    minQty: '500 gram',
                    image: "images/apple.png",
                    price: "300",
                    actualPrice: "240"
                },
                {
                    name: "Grapes",
                    image: "images/grapes.png",
                    price: "200",
                    minQty: '500 gram',
                    actualPrice: "180"
                },
                {
                    name: "Banana",
                    image: "images/banna.png",
                    price: "200",
                    minQty: '1kg',
                    actualPrice: "190"
                },
                {
                    name: "Dragon Fruit",
                    image: "images/dragon-fruit.png",
                    price: "200",
                    actualPrice: "195",
                    minQty: '1kg'
                },
            ],
        },
        "veggies":
        {
            displayName: "Veggies",
            displayImage: "images/manageveggies/vegetables.png",
            list: [
                {
                    name: 'Onion',
                    minQty: '1 kg',
                    actualPrice: 50,
                    price: 60,
                    image: "images/Onion.png"
                },
                {
                    name: 'Potato',
                    minQty: '1 kg',
                    actualPrice: 50,
                    price: 60,
                    image: "images/Potato-veggie.png"
                },
                {
                    name: "Capsium",
                    minQty: "2kg",
                    image: "images/Capcicum.png",
                    price: "200",
                    actualPrice: "195"
                },
            ],
        },
        "grocery":
        {
            displayName: "Grocery",
            displayImage: "images/manageveggies/Grocery.png",
            list: [
                {
                    name: "Soap",
                    image: "images/Capcicum.png",
                    price: "300",
                    actualPrice: "240",
                    minQty: '1 Packet'
                },
                {
                    name: "Milk",
                    image: "images/Capcicum.png",
                    price: "200",
                    actualPrice: "195",
                    minQty: '1 Litre'
                },
                {
                    name: "Curd",
                    image: "images/Capcicum.png",
                    price: "200",
                    actualPrice: "195",
                    minQty: '100 Grams'
                },
            ],
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