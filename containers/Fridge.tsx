import React, { useState } from "react"
import { useStore } from "@/store"
import ChevronDown from "../components/buttons/ChevronDown"
import ChevronUp from "../components/buttons/ChevronUp"
import FridgeItem from "../components/FridgeItem"
import useToggle from "@/hooks/useToggle"

function Fridge() {
  const [expanded, toggleExpanded] = useToggle(false)
  const fridge = useStore((state) => state.fridge)

  return (
    <div className="flex flex-col">
      <div className="text-3xl flex">
        <h1>Ingredients</h1>
        <ChevronDown
          onClick={toggleExpanded}
          className={expanded ? "hidden" : ""}
        />
        <ChevronUp onClick={toggleExpanded} className={expanded ? "" : "hidden"} />
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
