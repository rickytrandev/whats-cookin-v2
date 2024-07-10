"use client"
import Search from "@/components/Search"
import { useStore, StateType } from "@/store"
import { useEffect } from "react"
import Fridge from "@/components/Fridge"

export default function Home() {
  const fridge = useStore((state: StateType) => state.fridge)

  // function count() {
  //   const count = useStore((state) => state.count)
  //   return <h1>{count}</h1>
  // }

  useEffect(() => {
    console.log(fridge)
  }, [fridge])

  return (
    <main className="mx-4">
      <Search />
      <Fridge />

    </main>
  )
}
