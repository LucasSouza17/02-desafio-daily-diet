import { Text, ModalProps } from "react-native";
import * as S from "./styles";

type Props = ModalProps & {
  children: React.ReactNode;
};

export function Modal({ children, ...rest }: Props) {
  return (
    <S.Modal {...rest}>
      <S.Overlay />
      <S.Container>
        <S.ModalView>{children}</S.ModalView>
      </S.Container>
    </S.Modal>
  );
}
