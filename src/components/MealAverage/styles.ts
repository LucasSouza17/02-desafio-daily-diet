import styled, { css } from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

export type CardStatusDiet = {
  isInDiet: boolean;
};

export const Container = styled(TouchableOpacity).attrs(
  ({}) => ({
    activeOpacity: 0.7
  } as TouchableOpacityProps)
)<CardStatusDiet>`
  background-color: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  padding: 8px 16px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather).attrs<CardStatusDiet>(({ theme, isInDiet }) => ({
  size: 24,
  color: isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  name: "arrow-up-right",
}))`
  align-self: flex-end;
`;

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
