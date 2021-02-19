import React from 'react';

export const Item = (props) => {
    const { listing_id, url, image, title, currency_code, price, quantity } = props;
    return (
        <div className="item" key={listing_id}>
            <div className="item-image">
                <a href={url}>
                    <img src={image} alt={title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{currency_code}{price}</p>
                <p className="item-quantity level-medium">{quantity} left</p>
            </div>
        </div>
    )
}
