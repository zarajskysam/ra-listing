import React from 'react';
import { Item } from './Item/Item';
import './main.css';



export const Listng = (props) => {
    const { items } = props;
    
    const getActiveItems = (obj) => {
        let renderArr = [];
        obj.forEach(item => {
            if (item.state === 'active') {
                renderArr.push(item);
            }
        })
        return renderArr;
    }

    const getCorrectCurrency = (currency, price) => {
        if (currency === 'USD') return `$${price}`;
        if (currency === 'EUR') return `€${price}`;
        return `${price} GBP`;
    }

    const getShortTitle = (str) => {
        if (str.length > 50) return str.substr(0, 50) + '...';
        return str;
    }

    // const getQuantityStyle = (count) => {
    //     if (count <= 10 ) return 'level-low';
    //     if (count <= 20 ) return 'level-medium';
    //     return 'level-high';
    // }
    

    return (
        getActiveItems(items).map(option => (
            <Item listing_id={option.listing_id} url={option.url} image={option.MainImage.url_570xN} title={getShortTitle(option.title)} price={getCorrectCurrency(option.currency_code, option.price)} quantity={option.quantity} key={option.listing_id}/>
            )
        )
    )
}
