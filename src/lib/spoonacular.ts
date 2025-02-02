const API_KEY = '98eb41ba4e204531a80b5854cdb0eb4b';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients?: string[];
  instructions?: string;
}

export const searchRecipes = async (minCalories: number, maxCalories: number): Promise<Recipe[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/complexSearch?apiKey=${API_KEY}&minCalories=${minCalories}&maxCalories=${maxCalories}&number=10&addNutrition=true`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch recipes');
    }

    const data = await response.json();
    
    if (!data.results || !Array.isArray(data.results)) {
      return [];
    }

    return data.results.map((recipe: any) => {
      const nutrients = recipe.nutrition?.nutrients || [];
      const findNutrient = (name: string) => {
        const nutrient = nutrients.find((n: any) => n.name === name);
        return nutrient ? nutrient.amount : 0;
      };

      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        calories: findNutrient('Calories'),
        protein: findNutrient('Protein'),
        carbs: findNutrient('Carbohydrates'),
        fat: findNutrient('Fat'),
      };
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipeById = async (id: string): Promise<Recipe> => {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}&includeNutrition=true`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch recipe details');
    }

    const data = await response.json();
    
    // Get nutrition information
    const nutritionResponse = await fetch(
      `${BASE_URL}/${id}/nutritionWidget.json?apiKey=${API_KEY}`
    );

    if (!nutritionResponse.ok) {
      throw new Error('Failed to fetch nutrition information');
    }

    const nutritionData = await nutritionResponse.json();

    return {
      id: data.id,
      title: data.title,
      image: data.image,
      calories: parseFloat(nutritionData.calories),
      protein: parseFloat(nutritionData.protein),
      carbs: parseFloat(nutritionData.carbs),
      fat: parseFloat(nutritionData.fat),
      ingredients: data.extendedIngredients?.map((ing: any) => ing.original) || [],
      instructions: data.instructions || ''
    };
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};