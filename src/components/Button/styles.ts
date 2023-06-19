import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity).attrs(
  ({}) =>
    ({
      activeOpacity: 0.7,
    } as TouchableOpacityProps)
)<Props>`
  flex-direction: row;
  gap: 12px;

  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.GRAY_2 : "transparent")};

  border: ${({ theme, type }) => (type === "PRIMARY" ? undefined : `1px solid ${theme.COLORS.GRAY_1}`)};
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  padding: 0px 24px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``;
