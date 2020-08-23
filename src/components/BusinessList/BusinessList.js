import React from 'react';
import './BusinessList.css';
import {BusinessCard} from '../Business/Business'

export const BusinessList = (props) => {
    return (
        <div className="BusinessList">
            {props.businesses && props.businesses.map((business) =>{
                return <BusinessCard business={business} key={business.id}/>;
            })}
        </div>
    )
}