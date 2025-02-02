import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { searchRecipes, Recipe } from '../lib/spoonacular';
import Navigation from '../components/Navigation';
import BMIStatus from '../components/BMIStatus';
import RecipeCard from '../components/RecipeCard';
import CalorieRangeSlider from '../components/CalorieRangeSlider';

export default function Home() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [minCalories, setMinCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(2000);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from('users_table')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user data:', error);
        return;
      }

      setUserData(data);
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipes = await searchRecipes(minCalories, maxCalories);
        setRecipes(recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    const debounceTimer = setTimeout(fetchRecipes, 500);
    return () => clearTimeout(debounceTimer);
  }, [minCalories, maxCalories]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome, {userData.full_name}
        </h1>

        <BMIStatus height={userData.height} weight={userData.weight} />

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Calorie Range</h2>
          <CalorieRangeSlider
            minValue={minCalories}
            maxValue={maxCalories}
            onMinChange={setMinCalories}
            onMaxChange={setMaxCalories}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Recommended Recipes</h2>
          <div className="grid grid-cols-1 gap-4">
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}