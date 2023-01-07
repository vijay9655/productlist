import React from 'react';
const Add_card = 'Add_card';
const Add_prodlist = 'Add_prodlist';
const Edit_card = 'Edit_card';
const Delete_card = 'Delete_card'
const initial = {
    product_list: [
        {
            id: 1,
            img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp',
            type: 'New',
            prodname: 'Belt',
            price: '200',

        },
        {
            id: 2,
            img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
            type: 'New',
            prodname: 'Mens combo',
            price: '200',



        },
        {
            id: 3,
            img: 'https://pngimg.com/uploads/jeans/jeans_PNG5773.png',
            type: 'New',
            prodname: 'jeans',
            price: '200',


        },
        {
            id: 4,
            img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp',
            type: 'New',
            prodname: 'Shoe & Jeans',
            price: '200',


        },
        {
            id: 5,
            img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp',
            type: 'New',
            prodname: 'Womens collection',
            price: '200'
        },
        {
            id: 6,
            img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp',
            type: 'New',
            prodname: 'Combo Offer',
            price: '200',

        },

    ],
    card: [],

};

const reducers = (state = initial, action) => {

    switch (action.type) {
        case Add_prodlist:
            return {
                ...state, product_list: action.payload
            }
        case Add_card:
            return {
                ...state, card: action.payload
            }
        case Edit_card:
            return {
                state, card: action.payload
            }
        case Delete_card:
            return {
                state, card: action.payload,
            }
        default:
            return state;
    }

}

export default reducers;
