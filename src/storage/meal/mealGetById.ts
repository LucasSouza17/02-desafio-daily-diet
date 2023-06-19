import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { AppError } from "@utils/AppError";

export async function mealGetById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const meal = meals.filter(meal => meal.id === id)[0];

    if(!meal) {
      throw new AppError('Não foi possível carregar esta refeição.')
    }

    return meal;
  } catch(error) {
    throw error;
  }
}