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
    <div className={'SearchQuery'}>
        {
            props.errorInSearch === true && (
                <div>{'Oops! not enough information here, please add some more'}</div>
            )
        }
        { props.searching && (props.response !== true ?
            <div>{'looking for restaurants...'}</div>:
            (<div>
                {props.validSearchQuery === true?
                    (`Here's what we found for "${searchQuery.term}" in ${searchQuery.location}`):
                    ('no restaurants found :( try searching for something else')
                }
            </div>))}

    </div>
        </>
    )
}

