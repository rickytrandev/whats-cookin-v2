"use client"

import React, { useEffect, useState } from "react"
import { useDebounce } from "@/hooks/useDebounce"
import { getFood } from "@/apiCalls/getFood"
import SearchResults from "./SearchResults"

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
    console.log("debounced query", debouncedQuery)

   debouncedQuery && fetchFood()
  }, [debouncedQuery])

  const handleSearchResults = (id: string) => {
    console.log(id)
  }

  // useEffect(() => {
  //   console.log(searchResults)
  // }, [searchResults]);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.currentTarget.value)
  }

  return (
    <div>
      <input
        className="border-black border-2"
        type="text"
        placeholder="Enter your ingredients"
        value={query}
        onChange={(e) => handleQuery(e)}
      />
      <SearchResults
        handleSearchResults={handleSearchResults}
        searchResults={searchResults}
      />
    </div>
  )
}

export default Search
