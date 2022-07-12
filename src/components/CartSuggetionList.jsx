import React from "react";
import { connect } from 'react-redux';
import './stock-row.scss';
import Slider from "react-slick";

const CartSuggetionList = (props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        variableWidth: true
    };
    return (
        <>
            <Slider {...settings}>
                {
                    Object.keys(props.cartListNew).map(cur => {
                        return props.cartListNew[cur].list.map(data =>
                            <div className="pro-grid">
                                <div className="pro-image">
                                    <img src={require('../assets/' + data.image).default} alt="not loaded" />
                                    <div className="add-prudct" onClick={()=> props.updateQuantity(1,0,data,cur)}>+</div>
                                </div>
                                <div className="pro-details">
                                    <div className='name'>{data.name}</div>
                                    <div className='min-qty'>{data.minQty}</div>
                                    <div className='price'>
                                        <span className='ruppes'>₹</span>
                                        <span>{data.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
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