"use client"

import React, { useEffect, useState } from "react"
import { useDebounce } from "@/hooks/useDebounce"
import { getFood } from "@/apiCalls/getFood"
import SearchResults from "./SearchResults"
import CloseBtn from "./buttons/CloseBtn"
import SearchBtn from "./buttons/SearchBtn"

export type SearchResultType = {
  food: {
    category: string
    categoryLabel: string
    foodId: string
    image: string
    knownAs: string
    label: string
  }
  nutrients: []
}

function Search() {
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([])
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    const fetchFood = async () => {
      const result = await getFood(debouncedQuery)
      setSearchResults(result)
    }

    debouncedQuery && fetchFood()
  }, [debouncedQuery])

  const handleCloseClick = () => {
    setQuery("")
    setSearchResults([])
  }

  // useEffect(() => {
  //   console.log(searchResults)
  // }, [searchResults]);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.currentTarget.value)
  }

  return (
    <div className="flex relative justify-center flex-col items-center">
      <div className="relative w-full">
        <input
          className="border-green-500 border-2 w-full bg-dark-gray text-white rounded-full p-3 text-xl my-4"
          type="text"
          placeholder="Search for ingredients..."
          value={query}
          onChange={(e) => handleQuery(e)}
        />
        {query ? (
          <CloseBtn
            onClick={handleCloseClick}
            className="absolute right-5 top-1/2 transform -translate-y-1/2"
          />
        ) : (
          <SearchBtn />
        )}
      </div>
      <SearchResults
        handleCloseClick={handleCloseClick}
        searchResults={searchResults}
      />
    </div>
  )
}

export default Search
