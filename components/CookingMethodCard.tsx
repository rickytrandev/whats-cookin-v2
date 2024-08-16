import React, { useEffect } from "react"
import { CookingMethods, useStore } from "@/store"

type CookingMethodCardProps = {
  method: CookingMethods
  toggleExpanded: () => void
}

function CookingMethodCard({ method, toggleExpanded }: CookingMethodCardProps) {
  const setCookingMethod = useStore((state) => state.setCookingMethod)
  const desiredCookingMethod = useStore((state) => state.desiredCookingMethod)
  const isActive = method === desiredCookingMethod

  // useEffect(() => {
  //   console.log(desiredCookingMethod)
  // }, [desiredCookingMethod])

  const methodDescriptions = {
    Grill: "A smoke-kissed flavor and beautiful grill marks",
    Oven: "Juicy and tender",
    Smoker: "A rich and disctinct smoky flavor and aroma",
    "Air Fryer" : "A healthier option without all the added fat",
    Stovetop: "A deeply flavorful sear"
  }

  const handleClick = (method: CookingMethods) => {
    setCookingMethod(method)
    toggleExpanded()
  }

  return (
    <div
      onClick={() => handleClick(method)}
      className={`rounded-xl bg-neutral-900 my-4 p-3 ${isActive && 'border-2 border-green-500'}`}
    >
      <h2 className="text-xl">{method}</h2>
      <p>{methodDescriptions[method]}</p>
    </div>
  )
}

export default CookingMethodCard
