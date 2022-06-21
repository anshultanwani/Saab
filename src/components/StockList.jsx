import { TextField } from '@mui/material';
import React from 'react';
import './stock-row.scss';

const StockList = props => {
    const {
        list,
        updateQty
    } = props;


    const ProdRow = props => {
        const {
            data,
            updateQty,
            index
        } = props;

        return (
            <div className='prod-row'>
                <div className='left-sec'>
                    <div className='prod-img'>
                    <img src={require('../assets/'+ data.image).default}/>
                    </div>
                    <div className='name-price'>
                        <div className='name'>{data.name}</div>
                        <div className='price-sec'>
                            <span className='price'>
                                <span className='ruppes'>₹</span>
                                <span>{data.actualPrice}</span>
                                {data.price?
                                    <div style={{marginLeft: 20,opacity: 0.5}}>
                                        <span>₹</span>
                                        <strike>{data.price}</strike>
                                    </div>
                                : null}
                            </span>
                        </div>
                        <div className='min-qty'>{data.minQty}</div>
                    </div>
                </div>
                <div className='right-sec'>
                    <div className='input-holder'>
                        <span className='qty-btn' onClick={() => updateQty(data.quantity - 1,index)}>-</span>
                        <TextField
                            className="mob-field"
                            sx={{ m: 1}}
                            InputProps={{
                                value: data.quantity,
                                type: 'number',
                                onChange: (e) => updateQty(Number(e.target.value),index)
                            }}
                        />
                        <span className='qty-btn' onClick={() => updateQty(data.quantity + 1,index)}>+</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='stock-list'>
            {list.map((cur,index) => {
                return (
                    <ProdRow 
                        data={cur}
                        key={index}
                        index={index}
                        updateQty={updateQty}
                    />
                )
            })}
        </div>
    )
};

export default StockList;