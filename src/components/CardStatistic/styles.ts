import styled, { css } from "styled-components/native";

export type CardTypeStyleProps = "GREEN" | "RED" | "GRAY";

type Props = {
  type: CardTypeStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "GRAY"
      ? theme.COLORS.GRAY_6
      : type === "RED"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};

  padding: 16px;
  border-radius: 8px;

  gap: 8px;
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  text-align: center;
`;

export const InfoDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}

  text-align: center;
`;
