import styled, { css } from "styled-components/native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";

export type CardStatusDiet = {
  isInDiet: boolean;
};

export const Container = styled(SafeAreaView).attrs(
  ({}) =>
    ({
      edges: ["top"],
    } as SafeAreaViewProps)
)<CardStatusDiet>`
  background-color: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  padding: 24px;
  padding-bottom: 36px
`;

export const Icon = styled(Feather).attrs<CardStatusDiet>(({ theme, isInDiet }) => ({
  size: 24,
  color: isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  text-align: center;
`;

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}

  text-align: center;
  padding-bottom: 12px;
`;
