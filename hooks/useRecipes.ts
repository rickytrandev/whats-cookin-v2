import { useState } from "react";
import { useQuery } from "react-query";
import { useStore } from "@/store";
import { RecipeType } from "@/containers/Recipes";

async function fetchRecipes(ingredients: string) {
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

  return response.json()
}

export const useRecipes = () => {
  const fridge = useStore((state) => state.fridge);
  const ingredients = fridge.map((item) => item.food.label).join(", ");
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);
  const [errorMessage, seteErrorMessage] = useState<string | null>(null);

  const { error: fetchError, refetch } = useQuery(['recipes', ingredients], () => fetchRecipes(ingredients), {
    suspense: true,
    enabled: false, // Only fetch when fetchTrigger is true
    staleTime: 0,
    onSuccess: (data) => {
      setRecipes(data) // Update recipes state on successful fetch
      // setFetchTrigger(false) // Reset the fetch trigger after fetching
    }
  });

  const handleGetRecipes = () => {
    if (!fridge.length) {
      seteErrorMessage("Your ingredient list is empty")
      return
    }
    seteErrorMessage(null)
    refetch()
  }

  return { recipes, fetchError, handleGetRecipes, errorMessage }
};


