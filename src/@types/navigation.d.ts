export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      meals: undefined;
      meals_statistics: undefined;
      new_meal: undefined;
      meal_created: {
        isInDiet: boolean;
      }
      meal_detail: {
        mealId: string;
      }
    }
  }
}