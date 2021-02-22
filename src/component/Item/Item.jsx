import React from 'react';
import  classnames from 'classnames';

export const Item = (props) => {
    const { listing_id, url, image, title, price, quantity } = props;


    const getQuantityStyle = () => {
        if (quantity <= 10 ) {
            return ('level-low');
        } else if (quantity <= 20) {
            return ('level-medium');
        } else {
            return ('level-high');
        }     
    }    

    const className = classnames('item-quantity', getQuantityStyle());

    
    return (
        <div className="item" key={listing_id}>
            <div className="item-image">
                <a href={url}>
                    <img src={image} alt={title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}</p>
                <p className={className}>{quantity} left</p>
            </div>
        </div>
    )
}
