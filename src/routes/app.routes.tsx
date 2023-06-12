import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Meals } from "@screens/Meals";
import { MealsDetail } from "@screens/MealsDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="meals" component={Meals} />
      <Screen name="meals_detail" component={MealsDetail} />
    </Navigator>
  );
}