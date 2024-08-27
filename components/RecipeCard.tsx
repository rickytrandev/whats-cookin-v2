import React from 'react';
import { RecipeType } from '@/containers/Recipes';

function RecipeCard({title, description}: RecipeType) {
  return (
    <li
    className="border-green-500 border-2 p-2 mb-2 rounded"
    key={title}
  >
    <h2 className="mb-2" >{title}</h2>
    <p>{description}</p>
  </li>
  );
}

export default RecipeCard;