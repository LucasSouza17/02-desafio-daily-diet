import styled, { css } from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type CardStatusDiet = {
  isInDiet: boolean;
};

export const Container = styled(TouchableOpacity).attrs(
  ({}) =>
    ({
      activeOpacity: 0.8,
    } as TouchableOpacityProps)
)`
  width: 100%;
  height: 50px;
  min-height: 50px;

  flex-direction: row;
  align-items: center;

  padding: 14px 12px;
  padding-right: 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
  margin: 0px 12px;
`;

export const MealName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const MealStatus = styled.View<CardStatusDiet>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, isInDiet }) => (isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID)};

  border-radius: 7px;
  margin-left: 12px;
`;
