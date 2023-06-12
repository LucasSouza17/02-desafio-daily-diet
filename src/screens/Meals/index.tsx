import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import { UserHeader } from "@components/UserHeader";
import { Button } from "@components/Button";
import { MealAverage } from "@components/MealAverage";
import { MealItem } from "@components/MealItem";

const MEALS_DATA = [
  {
    date: "17.01.24",
    meals: [
      {
        meal: "MC Donalds",
        time: "20:30",
        isInDiet: false,
      },
      {
        meal: "Milk Shake",
        time: "22:30",
        isInDiet: false,
      },
    ],
  },
  {
    date: "12.02.24",
    meals: [
      {
        meal: "Salada",
        isInDiet: true,
        time: "12:00",
      },
    ],
  },
];

export function Meals() {
  const navigation = useNavigation();

  function handleGoToMealsDetail() {
    navigation.navigate("meals_detail")
  }

  return (
    <S.Container>
      <UserHeader />

      <MealAverage percent={75.91} onPress={handleGoToMealsDetail} />

      <S.Title>Refeições</S.Title>
      <Button title="Nova refeição" icon="plus" />
      
      <FlatList
        data={MEALS_DATA}
        keyExtractor={(item, index) => String(item.date + index)}
        contentContainerStyle={[{ paddingBottom: 60 }, MEALS_DATA.length === 0 && { flex: 1 }]}
        renderItem={({ item }) => (
          <S.SectionContainer>
            <S.SectionText>{item.date}</S.SectionText>
            {item.meals.map((item, index) => (
              <MealItem key={item.meal + index} time={item.time} meal={item.meal} isInDiet={item.isInDiet} />
            ))}
          </S.SectionContainer>
        )}
      />
    </S.Container>
  );
}
