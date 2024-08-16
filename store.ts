"use client"

import { create } from "zustand"
import { SearchResultType } from "./components/Search"

export type CookingMethods = "Grill" | "Oven" | "Smoker" | "Air Fryer" | "Stovetop"

export type StateType = {
  fridge: SearchResultType[]
  desiredCookingMethod: CookingMethods | null,
  setCookingMethod: (method: CookingMethods) => void,
  addToFridge: (foodItem: SearchResultType) => void
  removeFromFridge: (id: string) => void
}

export const useStore = create<StateType>((set) => ({
  fridge: [],
  desiredCookingMethod: null,
  setCookingMethod: (method) => 
    set((state) => ({
      desiredCookingMethod: method
    })),
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
