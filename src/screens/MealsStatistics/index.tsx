import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealsStatisticsProps, mealsStatistics } from "@utils/MealsStatistics";

import * as S from "./styles";

import { DetailHeader } from "@components/DetailHeader";
import { CardStatistic } from "@components/CardStatistic";
import { Loading } from "@components/Loading";

export function MealsStatistics() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsStatistic, setMealsStatistic] = useState<MealsStatisticsProps>({
    bestSequenceOfMealInDiet: 0,
    mealsInDietNumber: 0,
    mealsInDietPercentage: 0,
    mealsNotInDietNumber: 0,
    totalMealsNumber: 0,
  });

  async function fetchMealsStatistics() {
    try {
      setIsLoading(true);

      const meals = await mealsGetAll();
      setMealsStatistic(mealsStatistics(meals));
    } catch (error) {
      console.log(error);
      Alert.alert("Estatísticas", "Não foi possível carregar as estatísticas.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMealsStatistics();
  }, []);

  return (
    <S.Container>
      <DetailHeader percent={mealsStatistic.mealsInDietPercentage} />
      <S.InfoContainer contentContainerStyle={{ paddingBottom: 70 }}>
        <S.Title>Estatísticas gerais</S.Title>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <S.FirstContainerCards>
              <CardStatistic
                type="GRAY"
                info={mealsStatistic.bestSequenceOfMealInDiet}
                description="melhor sequência de pratos dentro da dieta"
              />
              <CardStatistic
                type="GRAY"
                info={mealsStatistic.totalMealsNumber}
                description="refeições registradas"
              />
            </S.FirstContainerCards>
            <S.SecondContainerCards>
              <CardStatistic
                type="GREEN"
                info={mealsStatistic.mealsInDietNumber}
                description="refeições dentro da dieta"
              />
              <CardStatistic
                type="RED"
                info={mealsStatistic.mealsNotInDietNumber}
                description="refeições fora da dieta"
              />
            </S.SecondContainerCards>
          </>
        )}
      </S.InfoContainer>
    </S.Container>
  );
}
