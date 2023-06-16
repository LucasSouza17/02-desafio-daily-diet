import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export type MealsStatisticsProps = {
  mealsInDietPercentage: number;
  bestSequenceOfMealInDiet: number;
  totalMealsNumber: number;
  mealsInDietNumber: number;
  mealsNotInDietNumber: number;
};

function bestSequenceOfMealInDietFunc(meals: MealStorageDTO[]) {
  let currentSequence = [];
  let bestSequenceOfMealInDiet = [];

  for (const meal of meals) {
    if (meal.isInDiet) {
      currentSequence.push(meal);
    } else {
      if (currentSequence.length > bestSequenceOfMealInDiet.length) {
        bestSequenceOfMealInDiet = currentSequence.slice();
      }
      currentSequence = [];
    }
  }

  if (currentSequence.length > bestSequenceOfMealInDiet.length) {
    bestSequenceOfMealInDiet = currentSequence;
  }

  return bestSequenceOfMealInDiet.length
}

export function mealsStatistics(meals: MealStorageDTO[]): MealsStatisticsProps {
  const totalMealsNumber = meals.length;
  const mealsInDietNumber = meals.filter((meal) => meal.isInDiet).length;
  const mealsNotInDietNumber = meals.filter((meal) => !meal.isInDiet).length;
  const mealsInDietPercentage = Number(((mealsInDietNumber / totalMealsNumber) * 100).toFixed(2));
  const bestSequenceOfMealInDiet = bestSequenceOfMealInDietFunc(meals);

  return {
    mealsInDietPercentage,
    bestSequenceOfMealInDiet,
    totalMealsNumber,
    mealsInDietNumber,
    mealsNotInDietNumber,
  };
}
