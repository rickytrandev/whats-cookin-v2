'use client';

import React, { useState } from "react"
import { useStore } from "@/store"

type Recipe = {
  title: string
  description: string
}

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [error, setError] = useState<string | null>(null)
  const fridge = useStore((state) => state.fridge);
  const desiredCookMethod =  useStore((state) => state.desiredCookingMethod)

  async function handleGetRecipes() {
    if (!fridge.length) {
      setError('Please add ingredients to search for recipes')
      return
    }

    const ingredients = fridge.map(item => item.food.label).join(", ");

    try {
      const response = await fetch('/api/getRecipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const recipesData = await response.json();
      setRecipes(recipesData);
      setError(null);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError('Failed to fetch recipes');
    }
  }

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li className="border-green-500 border-2 p-2 mb-2 rounded" key={recipe.title}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
      <button className="bg-green-500 p-2 rounded w-full text-2xl" onClick={handleGetRecipes}>Get Recipes</button>
      {error && <p className="text-red-500" >{error}</p>}
    </div>
  )
}

export default Recipes