"use client"

import React, { useEffect, useState } from "react"
import { useStore } from "@/store"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import SkeletonLoadingCard from "@/components/SkeletonLoadingCard"
import RecipeCard from "@/components/RecipeCard"

export type RecipeType = {
  title: string
  description: string
}

function Recipes() {
  const [recipes, setRecipes] = useState<RecipeType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const fridge = useStore((state) => state.fridge)
  const desiredCookMethod = useStore((state) => state.desiredCookingMethod)

  useEffect(() => {
    if (fridge.length) {
      setError(null)
    }
  }, [fridge])

  useEffect(() => {
    if (recipes.length > 0) {
      setLoading(false)
    }
  }, [recipes])

  async function handleGetRecipes() {
    if (!fridge.length) {
      setError("Please add ingredients to search for recipes")
      return
    }

    setLoading(true)

    const ingredients = fridge.map((item) => item.food.label).join(", ")

    try {
      const response = await fetch("/api/getRecipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch recipes")
      }

      const recipesData = await response.json()
      setRecipes(recipesData)
      setError(null)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching recipes:", error)
      setError("Failed to fetch recipes")
    }
  }

  return (
    <div>
      <ul>
        {loading ? 
          Array.from({ length: 3 }).map((_, index) => (
             <SkeletonLoadingCard key={index}/>
            ))
          : recipes.map((recipe) => (
             <RecipeCard title={recipe.title} description={recipe.description} />
            ))}
      </ul>
      <button
        className=" p-3 bg-green-500 rounded text-2xl w-full"
        onClick={handleGetRecipes}
      >
        Get Recipes
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default Recipes
