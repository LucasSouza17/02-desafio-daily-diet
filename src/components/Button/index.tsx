import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeStyleProps;
  icon?: keyof typeof Feather.glyphMap;
};

export function Button({ title, type = "PRIMARY", icon, ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      {icon && <S.Icon type={type} name={icon} />}
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
}
