import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealsGetAll";

export async function mealRemove(mealId: string) {
  try {
    const storedMeals = await mealsGetAll();

    const newMeals = storedMeals.filter(meal => meal.id !== mealId)

    const storage = JSON.stringify(newMeals)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}