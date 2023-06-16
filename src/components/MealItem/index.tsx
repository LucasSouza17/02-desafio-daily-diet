import {TouchableOpacityProps} from 'react-native'
import * as S from "./styles";

type Props = TouchableOpacityProps & S.CardStatusDiet & {
  hour: string;
  meal: string;
}

export function MealItem({hour, meal, isInDiet, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.MealTime>{hour}</S.MealTime>
      <S.Separator />
      <S.MealName>{meal}</S.MealName>

      <S.MealStatus isInDiet={isInDiet} />
    </S.Container>
  );
}
