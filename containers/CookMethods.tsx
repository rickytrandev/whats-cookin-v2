import React from "react"
import CookingMethodCard from "../components/CookingMethodCard"
import ChevronDown from "../components/buttons/ChevronDown"
import ChevronUp from "../components/buttons/ChevronUp"
import useToggle from "@/hooks/useToggle"
import { CookingMethods } from "@/store"

function CookMethods() {
  const cookingMethods: CookingMethods[] = ['Grill', 'Oven', 'Smoker', 'Air Fryer', 'Stovetop']
  const [expanded, toggleExpanded] = useToggle(true)

  return (
    <div>
      <div className="text-3xl flex">
        <h1>Cooking Method</h1>
        <ChevronDown
          onClick={toggleExpanded}
          className={expanded ? "hidden" : ""}
        />
        <ChevronUp
          onClick={toggleExpanded}
          className={expanded ? "" : "hidden"}
        />
      </div>
      <div className={`${expanded ? "" : "hidden"}`}>
        {cookingMethods.map((method) => (
          <CookingMethodCard toggleExpanded={toggleExpanded} key={method} method={method} />
        ))}
      </div>
    </div>
  )
}

export default CookMethods
