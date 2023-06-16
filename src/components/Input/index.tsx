import { TextInputProps } from "react-native";
import * as S from "./styles";

type Props = S.InputTypeProps &
  TextInputProps

export function Input({ isTextArea, ...rest }: Props) {
  return <S.InputField isTextArea={isTextArea} {...rest} />;
}
