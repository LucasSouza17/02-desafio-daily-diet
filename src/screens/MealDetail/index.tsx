import { useCallback, useState } from "react";
import { View, Alert } from "react-native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import * as S from "./styles";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";
import { Tag } from "@components/Tag";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealGetById } from "@storage/meal/mealGetById";
import { Loading } from "@components/Loading";
import { RemoveMealModal } from "@components/RemoveMealModal";
import { mealRemove } from "@storage/meal/mealRemoveById";

type RouteParams = {
  mealId: string;
};

export function MealDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<MealStorageDTO | null>(null);
  const [modalRemoveVisible, setModalRemoveVisible] = useState(false);

  async function fetchMeal() {
    try {
      setIsLoading(true);

      const meal = await mealGetById(mealId);

      setMeal(meal);
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        return Alert.alert("Refeição", error.message);
      } else {
        return Alert.alert("Refeição", "Não foi possível carregar esta refeição.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemoveMeal() {
    try {
      if (!meal) {
        return Alert.alert("Refeição", "Não foi possível excluir essa refeição.");
      }

      setModalRemoveVisible(false);
      await mealRemove(meal.id);
      navigation.navigate("meals");
    } catch (error) {
      console.log(error);
      return Alert.alert("Refeição", "Não foi possível excluir essa refeição.");
    }
  }

  async function handleEditMeal() {
    if (!meal) {
      return Alert.alert(
        "Refeição",
        "Não é possível editar está refeição no momento, tente novamente mais tarde."
      );
    }

    navigation.navigate("new_meal", {
      editMode: true,
      mealId: meal.id,
    });
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <S.Container>
      <RemoveMealModal
        visible={modalRemoveVisible}
        onCancel={() => setModalRemoveVisible(false)}
        onRemove={handleRemoveMeal}
      />

      <MealHeader type={meal?.isInDiet ? "GREEN" : "RED"} title="Refeição" />

      <S.InfoContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <S.Info>
            {!meal ? (
              <S.Title>Não foi possível carregar está refeição.</S.Title>
            ) : (
              <>
                <View>
                  <S.Title>{meal?.name}</S.Title>
                  <S.Description>{meal?.description}</S.Description>
                </View>
                <View>
                  <S.DateTitle>Data e hora</S.DateTitle>
                  <S.DateDescription>{`${meal?.date} às ${meal?.hour}`}</S.DateDescription>
                </View>
                <Tag isInDiet={meal?.isInDiet ?? true} />
              </>
            )}
          </S.Info>
        )}

        <S.ContainerButtons>
          <Button type="PRIMARY" title="Editar refeição" icon="edit-3" onPress={handleEditMeal} />
          <Button
            type="SECONDARY"
            title="Excluir refeição"
            icon="trash-2"
            onPress={() => setModalRemoveVisible(true)}
          />
        </S.ContainerButtons>
      </S.InfoContainer>
    </S.Container>
  );
}
