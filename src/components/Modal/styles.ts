import { ModalProps } from "react-native";
import styled from "styled-components/native";

export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  background-color: #000000;

  position: absolute;
  z-index: 0;

  opacity: 0.35;
`;

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  margin: 24px;
`;

export const Modal = styled.Modal.attrs(
  ({}) =>
    ({
      transparent: true,
      animationType: "slide",
    } as ModalProps)
)``;

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 24px;

  border-radius: 8px;
`;
