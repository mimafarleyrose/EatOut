import React, {useEffect, useState} from "react";
import './SearchQuery.css'

export const SearchQuery = (props) =>{
   const [searchQuery, setSearchQuery]=useState({})


useEffect(()=>{
    setSearchQuery({
        term: props.searchQuery.term.toLowerCase(),
        location: props.searchQuery.location.toLowerCase(),
        sortBy:props.searchQuery.sortBy
    }
)
},[props.searchQuery])

    return      (
        <>
        {props.searching && (
    <div className={'SearchQuery'}>
        {props.response !== true ?
            <div>{'looking for restaurants...'}</div>:
            (<div>
                {props.validSearchQuery === true?
                    (`Here's what we found for "${searchQuery.term}" in ${searchQuery.location}`):
                    ('no restaurants found :( try searching for something else')
                }
            </div>)}
    </div>
        )}
        </>
    )
}

