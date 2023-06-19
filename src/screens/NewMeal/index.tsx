import { useState, useEffect } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";
import { useNavigation, useRoute } from "@react-navigation/native";

import { mealCreate } from "@storage/meal/mealCreate";
import { mealGetById } from "@storage/meal/mealGetById";

import { AppError } from "@utils/AppError";

import * as S from "./styles";
import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { InputLabel } from "@components/InputLabel";
import { SelectBoolean } from "@components/SelectBoolean";
import { mealEdit } from "@storage/meal/mealEdit";

type RouteParams = {
  editMode?: boolean;
  mealId?: string;
};

export function NewMeal() {
  const route = useRoute();
  const { mealId, editMode } = route.params as RouteParams;

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  function verifyFormIsCompleted() {
    if (name && description && date && hour && isInDiet !== null) {
      return "COMPLETED";
    } else {
      Alert.alert(
        editMode ? "Editar refeição" : "Nova refeição",
        "Você não preencheu todos os campos para finalizar o cadastro da refeição."
      );
      return "NOT COMPLETED";
    }
  }

  async function handleCreateNewMeal() {
    try {
      const verifyForm = verifyFormIsCompleted();

      if (verifyForm === "NOT COMPLETED") {
        return;
      }

      const meal = {
        id: mealId || String(uuid.v4()),
        name,
        description,
        date,
        hour,
        isInDiet: isInDiet ? true : false,
      };

      if (editMode) {
        await mealEdit(meal);
        navigation.navigate("meal_detail", {
          mealId: meal.id,
        });
      } else {
        await mealCreate(meal);
        navigation.navigate("meal_created", {
          isInDiet: isInDiet ? true : false,
        });
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(editMode ? "Editar refeição" : "Nova refeição", error.message);
      } else {
        Alert.alert(
          editMode ? "Editar refeição" : "Nova refeição",
          "Não foi possível registrar uma nova refeição."
        );
        console.log(error);
      }
    }
  }

  async function fetchMeal() {
    try {
      if (!editMode || !mealId) {
        return;
      }

      const meal = await mealGetById(mealId);

      setName(meal.name);
      setDescription(meal.description);
      setDate(meal.date);
      setHour(meal.hour);
      setIsInDiet(meal.isInDiet);
      
    } catch (error) {
      console.log(error);
      if (error instanceof AppError) {
        return Alert.alert("Editar Refeição", error.message);
      } else {
        return Alert.alert("Editar Refeição", "Não foi possível carregar esta refeição.");
      }
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <S.Container>
      <MealHeader type="GRAY" title={editMode ? "Editar refeição" : "Nova refeição"} />

      <S.InfoContainer>
        <S.Form>
          <InputLabel label="Nome">
            <Input placeholder="Sanduíche de salada" onChangeText={setName} value={name} />
          </InputLabel>
          <InputLabel label="Descrição">
            <Input
              isTextArea
              placeholder="Um sanduíche com alface tomate e pouca caloria"
              onChangeText={setDescription}
              value={description}
            />
          </InputLabel>
          <S.RowBox>
            <InputLabel label="Data">
              <Input placeholder="17/01/2023" onChangeText={setDate} value={date} />
            </InputLabel>
            <InputLabel label="Hora">
              <Input placeholder="12:00" onChangeText={setHour} value={hour} />
            </InputLabel>
          </S.RowBox>
          <InputLabel label="Está dentro da dieta">
            <S.RowBox style={{ gap: 8 }}>
              <SelectBoolean isSelected={isInDiet} type="PRIMARY" onPress={() => setIsInDiet(true)} />
              <SelectBoolean
                isSelected={isInDiet === false && true}
                type="SECONDARY"
                onPress={() => setIsInDiet(false)}
              />
            </S.RowBox>
          </InputLabel>
        </S.Form>

        <Button title={editMode ? "Salvar alterações" : "Cadastrar refeição"} onPress={handleCreateNewMeal} />
      </S.InfoContainer>
    </S.Container>
  );
}
