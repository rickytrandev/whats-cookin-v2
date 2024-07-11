import React from "react"
import { SearchResultType } from "./Search"
import SearchItem from "./SearchItem"

type SearchResultsProps = {
  handleCloseClick: () => void,
  searchResults: SearchResultType[],

}

function SearchResults({
  searchResults,
  handleCloseClick
}: SearchResultsProps) {
  return (
    <div className="w-full absolute z-10 top-20 bg-dark-gray">
      {searchResults &&
        searchResults.map((result, index) => (
          <SearchItem  handleCloseClick={handleCloseClick} key={index} id={index} values={result} />
        ))}
    </div>
  )
}

export default SearchResults
