import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type CardTypeStyleProps = "GREEN" | "RED" | "GRAY";

type Props = {
  type: CardTypeStyleProps;
};

export const Container = styled(SafeAreaView).attrs(
  ({}) =>
    ({
      edges: ["top"],
    } as SafeAreaViewProps)
)<Props>`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : type === "RED"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};

  padding: 24px;
  padding-bottom: 42px;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))`
  
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  margin-left: -16px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
