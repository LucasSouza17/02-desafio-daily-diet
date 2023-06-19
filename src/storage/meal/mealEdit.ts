import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealEdit(editedMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();

    const newMeals = storedMeals.map(meal => {
      if(meal.id === editedMeal.id) {
        return {
          ...editedMeal
        }
      } else {
        return {
          ...meal
        }
      }
    })

    const storage = JSON.stringify(newMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}