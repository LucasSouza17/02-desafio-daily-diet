import { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import * as S from "./styles";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";
import { Tag } from "@components/Tag";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { mealGetById } from "@storage/meal/mealGetById";
import { Loading } from "@components/Loading";
import { AppError } from "@utils/AppError";

type RouteParams = {
  mealId: string;
};

export function MealDetail() {
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<MealStorageDTO | null>(null);

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

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <S.Container>
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
          <Button type="PRIMARY" title="Editar refeição" icon="edit-3" />
          <Button type="SECONDARY" title="Excluir refeição" icon="trash-2" />
        </S.ContainerButtons>
      </S.InfoContainer>
    </S.Container>
  );
}
