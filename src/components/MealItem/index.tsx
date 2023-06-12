import {TouchableOpacityProps} from 'react-native'
import * as S from "./styles";

type Props = TouchableOpacityProps & S.CardStatusDiet & {
  time: string;
  meal: string;
}

export function MealItem({time, meal, isInDiet, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.MealTime>{time}</S.MealTime>
      <S.Separator />
      <S.MealName>{meal}</S.MealName>

      <S.MealStatus isInDiet={isInDiet} />
    </S.Container>
  );
}
