import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../lib/spoonacular';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
            {recipe.title}
          </h3>
          <div className="text-sm text-gray-600">
            <p>{Math.round(recipe.calories)} calories per serving</p>
          </div>
        </div>
      </div>
    </Link>
  );
}