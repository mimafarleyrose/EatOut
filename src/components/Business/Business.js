import React from 'react';
import './Business.css';


export const BusinessCard = (props) => {
    const results = props.business;

        return (
                 <div className="Business">
                        <div className="image-container">
                            <img src={results.imageSrc} alt='' onClick={()=> window.open(results.url, "_blank")}/>
                        </div>
                        <div className ="heading">
                            <h2 id="name" onClick={()=> window.open(props.url, "_blank")}>{results.name}</h2>
                            <h2 id="price">{results.price ? `${results.price}`:``}</h2>
                        </div>
                        <div className="Business-information">
                            <div class="Business-address">
                                 <p>{results.address}</p>
                                 <p>{results.city}</p>
                                 <p id="directions" onClick={()=> window.open(`https://www.google.com/maps/search/?api=1&query=${results.alias}`, "_blank")}>
                                     {results.state}, {results.zipCode}</p>
                            </div>
                                <div className="Business-reviews">
                                    <h3>{results.category}</h3>
                                    <h3 className="rating">{results.rating} stars</h3>
                                    <p>{results.reviewCount} reviews</p>
                                </div>
                        </div>
                 </div>     
        );
};

