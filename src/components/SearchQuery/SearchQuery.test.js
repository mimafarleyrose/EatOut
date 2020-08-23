import React from 'react';
import {render} from "@testing-library/react";
import {SearchQuery} from "./SearchQuery";

describe('search query', () =>{
    it('renders loading when results are not passed in' , ()=>{

const searchQuery = render(
    <SearchQuery
        searchQuery={{term:'pizza',location:'manchester', sortBy:'best_match'}}
        searching={true}
    />,);
        expect(searchQuery.getByText('looking for restaurants...')).toBeInTheDocument()

    });

    it('renders loading when results are not passed in' , () => {

        const searchQuery = render(
            <SearchQuery
                searchQuery={{term:'pizza',location:'manchester', sortBy:'best_match'}}
                searching={true}
                response={true}
                validSearchQuery={true}
             />);

        const text = searchQuery.getByText('Here\'s what we found for "pizza" in manchester')
        expect(text).toBeInTheDocument()

    });

    it('renders loading when results are not passed in' , ()=>{

const searchQuery = render(
    <SearchQuery
        searchQuery={{term:'pizza',location:'manchester', sortBy:'best_match'}}
        searching={true}
        response={true}
        validSearchQuery={false}
    />);

const text = searchQuery.getByText('no restaurants found :( try searching for something else')
        expect(text).toBeInTheDocument()

    })

    it('renders text in lowercase' , ()=>{

const searchQuery = render(
    <SearchQuery
        searchQuery={{term:'pIzZa',location:'manChEster', sortBy:'best_match'}}
        searching={true}
        response={true}
        validSearchQuery={true}
    />);

const text = searchQuery.getByText('Here\'s what we found for "pizza" in manchester')
        expect(text).toBeInTheDocument()

    })
});