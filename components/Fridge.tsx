import React, { useEffect, useState } from "react"
import { useStore, StateType } from "@/store"
import ChevronDown from "./buttons/ChevronDown"
import ChevronUp from "./buttons/ChevronUp"
import FridgeItem from "./FridgeItem"

function Fridge() {
  const [expanded, setExpanded] = useState(false)
  const fridge = useStore((state: StateType) => state.fridge)

  const handleClick = () => {
    return setExpanded(!expanded)
  }

  return (
    <div className="flex flex-col">
      <div className="text-3xl flex">
        <h1>My Fridge</h1>
        <ChevronDown
          onClick={handleClick}
          className={expanded ? "hidden" : ""}
        />
        <ChevronUp onClick={handleClick} className={expanded ? "" : "hidden"} />
      </div>
      <div
        className={`border-green-500 border-b-2 ${expanded ? "" : "hidden"}`}
      >
        {!fridge.length && <p>Your fridge is currently empty.</p> }
        {fridge.map((item) => (
          <FridgeItem foodLabel={item.food.label} id={item.food.foodId} key={item.food.foodId}/>
        ))}
      </div>
    </div>
  )
}

export default Fridge
