import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/Navigation';
import RecipeInstructions from '../components/RecipeInstructions';
import { Recipe, getRecipeById } from '../lib/spoonacular';

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!id) return;
      
      try {
        const recipeData = await getRecipeById(id);
        setRecipe(recipeData);
      } catch (err) {
        setError('Failed to load recipe details. Please try again later.');
        console.error('Error fetching recipe details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleAddToMeals = async () => {
    if (!recipe) return;
    
    setSaving(true);
    try {
      const { error: saveError } = await supabase.from('meal_history').insert([
        {
          user_id: user.id,
          recipe_id: recipe.id,
          recipe_name: recipe.title,
          calories: recipe.calories,
          protein: recipe.protein,
          carbs: recipe.carbs,
          fat: recipe.fat
        }
      ]);

      if (saveError) throw saveError;
      navigate('/history');
    } catch (err) {
      console.error('Error adding meal:', err);
      setError('Failed to save meal. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const formatInstructions = (instructions: string): string[] => {
    // Remove any HTML tags and split by numbers or periods followed by a space
    return instructions
      .replace(/<[^>]*>/g, '')
      .split(/(?:\d+\.|\.)\s+/)
      .filter(step => step.trim().length > 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (!recipe) return null;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto">
        <div className="relative h-64">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h1 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
            {recipe.title}
          </h1>
        </div>

        <div className="p-4 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Nutritional Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Calories</p>
                <p className="text-xl font-bold text-gray-800">{Math.round(recipe.calories)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Protein</p>
                <p className="text-xl font-bold text-gray-800">{Math.round(recipe.protein)}g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Carbohydrates</p>
                <p className="text-xl font-bold text-gray-800">{Math.round(recipe.carbs)}g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Fat</p>
                <p className="text-xl font-bold text-gray-800">{Math.round(recipe.fat)}g</p>
              </div>
            </div>
          </div>

          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {recipe.instructions && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
              <div className="prose prose-sm max-w-none text-gray-700">
                <RecipeInstructions instructions={formatInstructions(recipe.instructions)} />
              </div>
            </div>
          )}

          <button
            onClick={handleAddToMeals}
            disabled={saving}
            className="w-full py-3 px-4 bg-teal-600 text-white font-medium rounded-lg shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Adding to Meals...' : 'Add to Today\'s Meals'}
          </button>
        </div>
      </div>
      <Navigation />
    </div>
  );
}