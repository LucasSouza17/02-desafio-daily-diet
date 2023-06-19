import { useState } from "react";
import {Alert} from 'react-native'
import uuid from 'react-native-uuid';
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import { AppError } from "@utils/AppError";

import { MealHeader } from "@components/MealHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { InputLabel } from "@components/InputLabel";
import { SelectBoolean } from "@components/SelectBoolean";
import { mealCreate } from "@storage/meal/mealCreate";

export function NewMeal() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [hour, setHour] = useState<string>("");
  const [isInDiet, setIsInDiet] = useState<boolean | null>(null);

  const navigation = useNavigation();

  function verifyFormIsCompleted() {
    if(name && description && date && hour && isInDiet !== null) {
      return "COMPLETED"
    } else {
      Alert.alert('Nova refeição', 'Você não preencheu todos os campos para finalizar o cadastro da refeição.');
      return "NOT COMPLETED"
    }
  }

  async function handleCreateNewMeal() {
    try {
      const verifyForm = verifyFormIsCompleted();

      if(verifyForm === "NOT COMPLETED") {
        return;
      }

      const meal = {
        id: String(uuid.v4()),
        name,
        description,
        date,
        hour,
        isInDiet: isInDiet ? true : false
      }

      await mealCreate(meal)
      navigation.navigate('meal_created', {
        isInDiet: isInDiet ? true : false
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova refeição", error.message);
      } else {
        Alert.alert("Nova refeição", "Não foi possível registrar uma nova refeição.");
        console.log(error);
      }
    }
  }

  return (
    <S.Container>
      <MealHeader type="GRAY" title="Nova refeição" />

      <S.InfoContainer>
        <S.Form>
          <InputLabel label="Nome">
            <Input placeholder="Sanduíche de salada" onChangeText={setName} />
          </InputLabel>
          <InputLabel label="Descrição">
            <Input
              isTextArea
              placeholder="Um sanduíche com alface tomate e pouca caloria"
              onChangeText={setDescription}
            />
          </InputLabel>
          <S.RowBox>
            <InputLabel label="Data">
              <Input placeholder="17/01/2023" onChangeText={setDate} />
            </InputLabel>
            <InputLabel label="Hora">
              <Input placeholder="12:00" onChangeText={setHour} />
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

        <Button title="Cadastrar refeição" onPress={handleCreateNewMeal} />
      </S.InfoContainer>
    </S.Container>
  );
}
