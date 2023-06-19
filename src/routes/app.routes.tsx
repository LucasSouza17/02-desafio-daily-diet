import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Meals } from "@screens/Meals";
import { MealsStatistics } from "@screens/MealsStatistics";
import { NewMeal } from "@screens/NewMeal";
import { MealCreated } from "@screens/MealCreated";
import { MealDetail } from "@screens/MealDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="meals" component={Meals} />
      <Screen name="meals_statistics" component={MealsStatistics} />
      <Screen name="new_meal" component={NewMeal} />
      <Screen name="meal_created" component={MealCreated} />
      <Screen name="meal_detail" component={MealDetail} />
    </Navigator>
  );
}