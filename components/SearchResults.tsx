import React from 'react';
import { SearchResultType } from './Search';
import SearchItem from './SearchItem';

type SearchResultsProps = {
  handleSearchResults: (id: string) => void
  searchResults: SearchResultType[]
}

function SearchResults({ handleSearchResults, searchResults }: SearchResultsProps) {
  return (
    <div>
      {searchResults && searchResults.map(result => {
        return <SearchItem values={result}/>
      })}
    </div>
  );
}

export default SearchResults;