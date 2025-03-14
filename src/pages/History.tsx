import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import Navigation from '../components/Navigation';
import { Trash2 } from 'lucide-react';

interface MealHistory {
  id: string;
  recipe_name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  date_added: string;
}

export default function History() {
  const { user } = useAuth();
  const [meals, setMeals] = useState<MealHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchTodaysMeals();
  }, [user]);

  const fetchTodaysMeals = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from('meal_history')
      .select('*')
      .eq('user_id', user.id)
      .gte('date_added', today.toISOString())
      .order('date_added', { ascending: false });

    if (error) {
      console.error('Error fetching meals:', error);
      return;
    }

    setMeals(data);
    setLoading(false);
  };

  const calculateTotals = () => {
    return meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 }
    );
  };

  const handleDelete = async (id: string) => {
    setDeleting(id);
    try {
      const { error } = await supabase
        .from('meal_history')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      
      setMeals(meals.filter(meal => meal.id !== id));
    } catch (error) {
      console.error('Error deleting meal:', error);
    } finally {
      setDeleting(null);
      setShowConfirm(null);
    }
  };

  const totals = calculateTotals();

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
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Today's Meals</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Totals</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Calories</p>
              <p className="text-xl font-bold text-gray-800">{Math.round(totals.calories)}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Protein</p>
              <p className="text-xl font-bold text-gray-800">{Math.round(totals.protein)}g</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Carbs</p>
              <p className="text-xl font-bold text-gray-800">{Math.round(totals.carbs)}g</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Total Fat</p>
              <p className="text-xl font-bold text-gray-800">{Math.round(totals.fat)}g</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">{meal.recipe_name}</h3>
                  <span className="text-sm text-gray-500">
                    {format(new Date(meal.date_added), 'h:mm a')}
                  </span>
                </div>
                {showConfirm === meal.id ? (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDelete(meal.id)}
                      disabled={deleting === meal.id}
                      className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                      {deleting === meal.id ? 'Deleting...' : 'Confirm'}
                    </button>
                    <button
                      onClick={() => setShowConfirm(null)}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowConfirm(meal.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2 text-sm text-gray-600">
                <div>
                  <p className="font-medium">{Math.round(meal.calories)}</p>
                  <p>cal</p>
                </div>
                <div>
                  <p className="font-medium">{Math.round(meal.protein)}g</p>
                  <p>protein</p>
                </div>
                <div>
                  <p className="font-medium">{Math.round(meal.carbs)}g</p>
                  <p>carbs</p>
                </div>
                <div>
                  <p className="font-medium">{Math.round(meal.fat)}g</p>
                  <p>fat</p>
                </div>
              </div>
            </div>
          ))}

          {meals.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No meals recorded today
            </div>
          )}
        </div>
      </div>
      <Navigation />
    </div>
  );
}