import React from "react"
import { SearchResultType } from "./Search"

type SearchItemProps = {
  values: SearchResultType
}

function SearchItem({ values }: SearchItemProps) {
  return <div>
    {/* <h2>hello</h2> */}
    <img src={values.food.image} alt="" />
    <h3>{values.food.label}</h3>
    {/* <p>P{values</p> */}
  </div>
}

export default SearchItem
