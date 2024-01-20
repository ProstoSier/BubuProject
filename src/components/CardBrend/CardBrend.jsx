
import React from "react";
import './cardBrend.css';

const CardBrend = ({brend}) => {
    return (
        <a className="brend-link" href="/">
            <div className="brend-card">
                <img className="brend-card__img" src={brend.img} alt={brend.name} />
            </div>
        </a>
    )
}

export default CardBrend;