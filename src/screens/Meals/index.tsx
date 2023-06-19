import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { MealsListAll, mealsGetAll } from "@storage/meal/mealsGetAll";

import * as S from "./styles";
import { UserHeader } from "@components/UserHeader";
import { Button } from "@components/Button";
import { MealAverage } from "@components/MealAverage";
import { MealItem } from "@components/MealItem";
import { Loading } from "@components/Loading";
import { separateForEqualDate } from "@utils/SeparateForEqualDate";
import { mealsStatistics } from "@utils/MealsStatistics";

export function Meals() {
  const [meals, setMeals] = useState<MealsListAll[]>([]);
  const [percentageInDiet, setPercentageInDiet] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleGoToMealsDetail() {
    navigation.navigate("meals_statistics");
  }

  function handleGoToNewMeal() {
    navigation.navigate("new_meal", {
      editMode: false,
      mealId: ''
    });
  }

  function handleGoToMealDetail(id: string) {
    navigation.navigate("meal_detail", {
      mealId: id,
    });
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);

      const meals = await mealsGetAll();

      setMeals(separateForEqualDate(meals));
      setPercentageInDiet(mealsStatistics(meals).mealsInDietPercentage);
    } catch (error) {
      console.log(error);
      Alert.alert("Refeições", "Não foi possível carregar as refeições.");
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Container>
      <UserHeader />

      <MealAverage percent={percentageInDiet} onPress={handleGoToMealsDetail} />

      <S.Title>Refeições</S.Title>
      <Button title="Nova refeição" icon="plus" onPress={handleGoToNewMeal} />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item, index) => item.date}
          contentContainerStyle={[{ paddingBottom: 60 }, meals.length === 0 && { flex: 1 }]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <S.SectionContainer>
              <S.SectionText>{item.date}</S.SectionText>
              {item.meals.map((item, index) => (
                <MealItem
                  key={item.id}
                  hour={item.hour}
                  meal={item.name}
                  isInDiet={item.isInDiet}
                  onPress={() => handleGoToMealDetail(item.id)}
                />
              ))}
            </S.SectionContainer>
          )}
          ListEmptyComponent={
            <S.EmptyContainer>
              <S.EmptyTitle>Nenhuma refeição cadastrada</S.EmptyTitle>
              <S.EmptyDescription>Cadastre refeições para ter o controle da sua dieta.</S.EmptyDescription>
            </S.EmptyContainer>
          }
        />
      )}
    </S.Container>
  );
}
