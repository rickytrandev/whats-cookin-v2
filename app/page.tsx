"use client"
import Search from "@/components/Search"
import Fridge from "@/containers/Fridge"
import CookMethods from "@/containers/CookMethods"
import Recipes from "@/containers/Recipes"

export default function Home() {
  return (
    <main className="mx-4">
      <div>
        <Search />
      </div>
      <div className="mb-4">
        <Fridge />
      </div>
      <div className="my-4">
        <CookMethods />
      </div>
      <div className="my-6">
        <Recipes />
      </div>
    </main>
  )
}