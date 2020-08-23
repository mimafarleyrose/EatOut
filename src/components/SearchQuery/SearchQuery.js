import React from "react";
import './SearchQuery.css'

export const SearchQuery = (props) =>{

    return      (
        <>
        {props.searching && (
    <div className={'SearchQuery'}>
        {props.response !== true ?
            <div>{'looking for restaurants...'}</div>:
            (<div>
                {props.validSearchQuery === true?
                    (`Here's what we found for "${props.searchQuery.term}" in ${props.searchQuery.location}`):
                    ('no restaurants found :( try searching for something else')
                }
            </div>)}
    </div>
        )}
        </>
    )
}

