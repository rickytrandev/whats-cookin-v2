"use client"

import React, { useEffect, useState } from "react"
import { useDebounce } from "@/hooks/useDebounce"
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
      try {
        const response = await fetch(`/api/getIngredient?query=${debouncedQuery}`)
        let result = await response.json()
        result = result.reduce(
          (acc: { results: SearchResultType[], labels: Set<string> }, current: SearchResultType) => {
            if (!acc.labels.has(current.food.label)) {
              acc.labels.add(current.food.label);
              acc.results.push(current);
            }
            return acc;
          },
          { results: [], labels: new Set<string>() }
        ).results;

        setSearchResults(result) // Set all results
      } catch (error) {
        console.error('Failed to fetch food data', error)
      }
    }

    if (debouncedQuery) {
      fetchFood()
    }
  }, [debouncedQuery])

  const handleCloseClick = () => {
    setQuery("")
    setSearchResults([])
  }

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