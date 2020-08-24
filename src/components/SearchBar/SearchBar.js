import React, {useEffect, useState} from 'react';
import './SearchBar.css';


export const SearchBar = (props) =>{
const [searchCuisine, setSearchCuisine]=useState('');
const [searchLocation, setSearchLocation]=useState('');
const [currentSortByValue, setCurrentSortByValue]=useState('best_match');

  const sortByOptions = [{
      name:'Best Match',
      id:'best_match'
  }, {name:'Highest Rated',
      id:'rating'
  },{name:'Most Reviewed',
      id: 'review_count'
    }];


  const searchQueryIsValid = (event) => {
      event.preventDefault();

      if(2>searchLocation.length || 2>searchLocation.length) {
          props.errorInSearch()
}

      else {
handleSearch()
      }
  }


  const handleSearch = () => {
      props.searching(true)
      props.searchQuery({
          term:searchCuisine,
          location:searchLocation,
          sortBy:currentSortByValue
      })
      props.searchYelp(searchCuisine, searchLocation, currentSortByValue)
      cleanUp()
  }
  const cleanUp = () => {
      setSearchLocation('')
      setSearchCuisine('')
      window.removeEventListener('keypress', (event)=>handleEnter(event))

  } ;
  const handleEnter = (event) => {
          if(event.key === 'Enter') {
              handleSearch(event)}
  }

  useEffect(()=>{

      if(searchCuisine.length>2 && searchLocation.length>2){
          window.addEventListener('keypress', (event)=>handleEnter(event))
      }
      // eslint-disable-next-line
  },[searchCuisine, searchLocation])


    return (
        <div className="SearchBar" >
            <div className="SearchBar-sort-options">
                <ul>
                    {sortByOptions.map(sortByOption => (
                            <li key={sortByOption.id}
                                className={currentSortByValue===sortByOption.id?
                                    'active':''}
                                onClick={()=>setCurrentSortByValue(sortByOption.id)}>
                                {sortByOption.name}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Cuisines"
                       className={'action-email'}
                       data-qa={'test-example'}
                       value={searchCuisine}
                       onChange={(event)=>{setSearchCuisine(event.target.value)}}/>
                <input placeholder="Where?"
                       value={searchLocation}
                       onChange={(event)=>setSearchLocation(event.target.value)}/>
            </div>
            <div className="SearchBar-submit">
                <button
                    onClick={(event)=>searchQueryIsValid(event)}>
                    {'Let\'s Go'}
                </button>
            </div>
        </div>
    );
}