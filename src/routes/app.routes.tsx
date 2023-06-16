import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Meals } from "@screens/Meals";
import { MealsDetail } from "@screens/MealsDetail";
import { NewMeal } from "@screens/NewMeal";
import { MealCreated } from "@screens/MealCreated";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="meals" component={Meals} />
      <Screen name="meals_detail" component={MealsDetail} />
      <Screen name="new_meal" component={NewMeal} />
      <Screen name="meal_created" component={MealCreated} />
    </Navigator>
  );
}