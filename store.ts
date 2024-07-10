"use client"

import { create } from "zustand"
import { SearchResultType } from "./components/Search"

export type StateType = {
  fridge: SearchResultType[]
  addToFridge: (foodItem: SearchResultType) => void
  removeFromFridge: (id: string) => void
}

export const useStore = create<StateType>((set) => ({
  fridge: [],
  addToFridge: (foodItem) =>
    set((state) => ({
      fridge: [...state.fridge, foodItem],
    })),
  removeFromFridge: (id) =>
    set((state) => ({
      fridge: state.fridge.filter(
        (item) => item.food.foodId !== id
      ),
    })),
}))
