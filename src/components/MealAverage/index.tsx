import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  percent: number;
};

export function MealAverage({ percent, ...rest }: Props) {
  const isInDiet = percent > 75 ? true : false
  const percentFormatted = String(percent).replace(".", ",") + "%"

  return (
    <S.Container isInDiet={isInDiet} {...rest}>
      <S.Icon isInDiet={isInDiet} />
      <S.Percent>{percentFormatted}</S.Percent>
      <S.PercentText>das refeições dentro da dieta</S.PercentText>
    </S.Container>
  );
}
