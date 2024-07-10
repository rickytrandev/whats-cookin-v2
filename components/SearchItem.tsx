import React from "react"
import { SearchResultType } from "./Search"
import AddBtn from "./buttons/AddBtn"
import { useStore } from "@/store"

type SearchItemProps = {
  handleCloseClick: () => void
  values: SearchResultType
  id: number
  key: number
}

function SearchItem({ values, id, handleCloseClick }: SearchItemProps) {
  const addToFridge = useStore((state) => state.addToFridge)

  const handleClick = () => {
    addToFridge(values)
    handleCloseClick()
  }

  return (
    <div
      className="flex w-full justify-between item-center p-4 text-xl"
      key={id}
    >
      <h3>{values.food.label}</h3>
      <AddBtn onClick={handleClick} />
    </div>
  )
}

export default SearchItem
