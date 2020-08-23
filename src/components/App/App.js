import React, { useState} from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';
import {SearchBar} from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import {SearchQuery} from "../SearchQuery/SearchQuery";


export const App = () => {
const [searchQuery, setSearchQuery]=useState({
    term:'',
    location:'',
    sortBy:''
})
const [results, setResults]=useState([]);
const [response, setResponse]=useState([]);
const [searching, setSearching]=useState(false);
const [validSearchQuery, setValidSearchQuery]=useState(false);


  const searchYelp=( term , location , sortBy )=> {
      Yelp.search(term, location, sortBy, (input) => setValidSearchQuery(input)).then((businesses) => {
          setResponse(true)
          setResults(businesses)
      })
  }

     return( 
         <div className="App">
            <h1>Eat Out</h1>
               <SearchBar
                   searchYelp={searchYelp}
                   searching={()=>setSearching(true)}
                   searchQuery={(input)=>setSearchQuery(input)}
               />
               <SearchQuery
                   searchQuery={searchQuery}
                   searching={searching}
                   validSearchQuery={validSearchQuery}
                   response={response}
               />
               <BusinessList businesses={results}/>
         </div>

        );
};

