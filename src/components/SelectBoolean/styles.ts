import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectedBooleanProps = {
  type: "PRIMARY" | "SECONDARY";
  isSelected: boolean | null;
};

export const Container = styled(TouchableOpacity).attrs(
  ({}) =>
    ({
      activeOpacity: 0.7,
    } as TouchableOpacityProps)
)<SelectedBooleanProps>`
  flex: 1;
  flex-direction: row;
  height: 50px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type, isSelected }) =>
    isSelected
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};

  border: ${({ theme, type, isSelected }) =>
    isSelected
      ? `1px solid ${type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}`
      : "none"};
  border-radius: 6px;

  padding: 12px;
  gap: 8px;
`;

export const StatusPoint = styled.View<Omit<SelectedBooleanProps, "isSelected">>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  border-radius: 4px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
