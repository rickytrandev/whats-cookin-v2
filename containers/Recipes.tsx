"use client"

import React, { Suspense, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import "react-loading-skeleton/dist/skeleton.css"
import RecipeCard from "@/components/RecipeCard"
import SkeletonLoadingCards from "@/components/SkeletonLoadingCards"
import { useRecipes } from "@/hooks/useRecipes"

const queryClient = new QueryClient()

export type RecipeType = {
  title: string
  description: string
}

function Recipes() {
  const { recipes, fetchError, handleGetRecipes, errorMessage } = useRecipes()

  if (fetchError) {
    return <p className="text-red-500">Failed to fetch recipes</p>
  }

  return (
    <div>
      {recipes && <h1 className="text-3xl mb-2">Recipes</h1>}
      {recipes?.map((recipe: RecipeType) => (
        <RecipeCard key={recipe.title} {...recipe} />
      ))}
      <button
        className="p-3 bg-green-500 rounded text-2xl w-full"
        onClick={() => {
          handleGetRecipes()
        }}
      >
        Get Recipes
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  )
}

function RecipesWithQueryClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SkeletonLoadingCards />}>
        <Recipes />
      </Suspense>
    </QueryClientProvider>
  )
}

export default RecipesWithQueryClient

// async function handleGetRecipes() {
//   if (!fridge.length) {
//     setError("Please add ingredients to search for recipes")
//     return
//   }

//   setLoading(true)

// const ingredients = fridge.map((item) => item.food.label).join(", ")

//   try {
//     const response = await fetch("/api/getRecipes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ ingredients }),
//     })

//     if (!response.ok) {
//       throw new Error("Failed to fetch recipes")
//     }

//     const recipesData = await response.json()
//     setRecipes(recipesData)
//     setError(null)
//     setLoading(false)
//   } catch (error) {
//     console.error("Error fetching recipes:", error)
//     setError("Failed to fetch recipes")
//   }
// }

// return (
//   <div>
//     <ul>
//       {loading
//         ? Array.from({ length: 3 }).map((_, index) => (
//             <SkeletonLoadingCard key={index} />
//           ))
//         : recipes.map((recipe) => <RecipeCard {...recipe} />)}
//     </ul>
//     <button
//       className=" p-3 bg-green-500 rounded text-2xl w-full"
//       onClick={handleGetRecipes}
//     >
//       Get Recipes
//     </button>
//     {error && <p className="text-red-500">{error}</p>}
//   </div>
// )
