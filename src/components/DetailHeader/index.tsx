import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

type Props = {
  percent: number;
};

export function DetailHeader({ percent }: Props) {
  const isInDiet = percent > 75 ? true : false;
  const percentFormatted = String(percent).replace(".", ",") + "%"

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("meals");
  }

  return (
    <S.Container isInDiet={isInDiet}>
      <TouchableOpacity onPress={handleGoBack}>
        <S.Icon name="arrow-left" isInDiet={isInDiet} />
      </TouchableOpacity>
      <S.Percent>{percentFormatted}</S.Percent>
      <S.PercentText>das refeições dentro da dieta</S.PercentText>
    </S.Container>
  );
}
