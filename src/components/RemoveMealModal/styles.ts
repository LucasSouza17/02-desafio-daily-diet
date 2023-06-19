import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  gap: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-top: 16px;
  text-align: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 12px;
`;
