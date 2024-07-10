import React from "react"
import { useStore } from "@/store"
import CloseBtn from "./buttons/CloseBtn"

type FridgeItemProps = {
  foodLabel: string
  id: string
}

function FridgeItem({ foodLabel, id }: FridgeItemProps) {
  const removeFromFridge = useStore((state) => state.removeFromFridge)

  return <div className="flex text-2xl justify-between py-2">
    <h2>{foodLabel}</h2>
    <CloseBtn onClick={() => removeFromFridge(id)}/>
  </div>
}

export default FridgeItem
