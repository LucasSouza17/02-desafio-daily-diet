import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

type Props = {
  type: S.CardTypeStyleProps;
  title: string;
};

export function MealHeader({ type, title }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container type={type}>
      <TouchableOpacity onPress={handleGoBack} activeOpacity={0.7} style={{zIndex: 2}}>
        <S.Icon name="arrow-left" />
      </TouchableOpacity>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
