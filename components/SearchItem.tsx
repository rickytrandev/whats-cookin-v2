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
      className="flex w-full justify-between item-center p-3 text-xl "
      key={id}
    >
      <p className="line-clamp-1 leading-8">{values.food.label}</p>
      <AddBtn onClick={handleClick} />
    </div>
  )
}

export default SearchItem
