import React, { useState } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BoxWithSideBorder from '../components/BoxWithSideBorder';
import StockList from '../components/StockList';
import './stock-refill.scss';

const StockRefill = props => {
    const [catSection,toggleSection] = useState({
        Veggies: {
            show: true,
            list: []
        },
        Grocery: {
            show: false,
            list: []
        },
        Fruits: {
            show: false,
            list: []
        }
    })

    const sortList = () => {
        let obj = {...catSection};
        Object.keys(catSection).map(curKey => {
            obj[curKey].list = dummyCart.filter(cur => cur.category === curKey.toLowerCase());
        })
        toggleSection(obj);
    }
    const dummyCart = [
        {
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
        }
    ]

    useEffect(() => {
        sortList()
    },[])

    const  section = () => {
        let arr = [];
        Object.keys(catSection).map(cur => {
            arr.push(
            <>
                <BoxWithSideBorder
                    title={cur}
                    subTitle={'('+ catSection[cur].list.length +' items)'}
                    rightSec={(
                        <div className='add-more'>ADD MORE </div>
                    )}
                    onClick={() => toggleSection({...catSection,[cur]: {...catSection[cur],show: !catSection[cur].show}})}
                />
                {catSection[cur].show && catSection[cur].list?.length ?
                    <StockList list={catSection[cur].list} updateQty={(qty,index) => {
                        let data = {...catSection};
                        data[cur].list[index].quantity = Number(qty) < 0 ? 0 : qty;
                        toggleSection(data);
                    }} />
                :null}
            </>
            );
        })
        return arr;
    }
    
    return (
        <div className='stock-refill'>
            {section()}
        </div>
    )
};

export default withRouter(StockRefill);