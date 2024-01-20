import React from "react";
import './cardProduct.css';
import { VscHeart } from "react-icons/vsc";
import comparison from '../Assets/card/сomparison.svg';

const CardProduct = ({product}) => {
    
    return (
        <a className="product-link" href="/">
            <div className="product-card">
                <img className="product-card__img" src={product.img} alt={product.name} />
                <div className="product-card__text">
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__price">{product.price}<span className="product-card__price oldPrice">{product.oldPrice}</span><span className="product-card__price newPrice">{product.newPrice}</span></p>
                </div>
                <div className='product-card__btn'>
                    <button className='product-card__buy'>
                        Купити
                    </button>
                    <button className='product-card__favorite'>
                        <VscHeart/>
                    </button>
                    <button className='product-card__comparison'>
                        <img className="product-card__icon" src={comparison} alt="comparison"/>
                    </button>
                </div>
            </div>
        </a>
    )
}

export default CardProduct;