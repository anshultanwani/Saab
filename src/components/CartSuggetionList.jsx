import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import './stock-row.scss';
import Slider from "react-slick";

import axios from "axios";

const CartSuggetionList = (props) => {

    const [stockCat, updatestockCat] = useState([]);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        variableWidth: true
    };


    useEffect(() => {
        console.log(stockCat);
        axios.get(window.apiDomain + "/v1/orders/stock")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.data);
                    updatestockCat(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <>
            <Slider {...settings}>
                {
                    Object.keys(stockCat).map(cur => {
                        console.log("curentcateroy" + JSON.stringify(cur))
                        // return props.cartListNew[cur].list.map(data =>
                        return stockCat[cur].map(data => {
                           return(
                            <div className="pro-grid">
                             <div className="pro-image">
                                 <img src={data.img} alt="not loaded" style={{ width: "100%" }} />
                                 <div className="add-prudct" onClick={() => props.updateQuantity(1, 0, data, cur)}>+</div>
                             </div>
                             <div className="pro-details">
                                 <div className='name'>{data.name}</div>
                                 <div className='min-qty'>{data.minQty + "" + data.unit}</div>                                    <div className='price'>
                                     <span className='ruppes'>₹</span>
                                     <span>{data.originalPrice}</span>
                                 </div>
                             </div>
                         </div>
                           )
                           
                        })
                    })
                }
            </Slider>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cartListNew: state.cart.stockCat,
    }
}

export default connect(mapStateToProps)(CartSuggetionList);