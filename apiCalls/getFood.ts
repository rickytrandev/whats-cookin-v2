export const getFood = async (query: string) => {
  const response = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_API_KEY}&nutrition-type=cooking`
  )
  const result = await response.json()
  console.log(result.hints)
  return result.hints
}
