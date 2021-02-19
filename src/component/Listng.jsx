import React from 'react';
import { Item } from './Item/Item';
import { data } from '../data/etsy';

const getActiveItems = (obj) => {
    let renderArr = [];
    obj.forEach(item => {
        if (item.state === 'active') {
            renderArr.push(item);
        }
    })
    return renderArr;
}

console.log(getActiveItems(data));

export const Listng = (props) => {
    const { items } = props;
    
    

    return (
        getActiveItems(data).map(option => (
            <Item listing_id={option.listing_id} url={option.url} image={option.MainImage.url_570xN} title={option.title} currency_code={option.currency_code} price={option.price} quantity={option.quantity} key={option.listing_id}/>
            )
        )
    )
}
