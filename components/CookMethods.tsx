import React from 'react';
import { useStore } from "@/store"
import CookingMethodCard from './CookingMethodCard';

function CookMethods() {
  const cookingMethods = useStore((state) => state.cookingMethods)

  return (
    <div>
      <h1 className='text-3xl'>Cooking Method</h1>
      {cookingMethods.map(method => (
        <CookingMethodCard key={method} method={method}/>
      ))}
    </div>
  );
}

export default CookMethods;