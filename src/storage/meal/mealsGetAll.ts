import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { separateForEqualDate } from "@utils/SeparateForEqualDate";
import { mealsStatistics } from "@utils/MealsStatistics";

export type MealsListAll = {
  date: string;
  meals: MealStorageDTO[];
}

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    const mealsByDate = separateForEqualDate(meals);

    const mealsStatistic = mealsStatistics(meals)

    return {meals, mealsByDate, mealsStatistic};
  } catch(error) {
    throw error;
  }
}