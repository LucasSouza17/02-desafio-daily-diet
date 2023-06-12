import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const InfoContainer = styled.ScrollView`
  flex: 1;
  padding: 24px;
  background-color: white;

  margin-top: -12px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  margin-top: 12px;
`;

export const FirstContainerCards = styled.View`
  height: 240px;
  flex-direction: column;
  gap: 16px;

  margin-top: 24px;
`;

export const SecondContainerCards = styled.View`
  flex-direction: row;

  gap: 16px;
  margin-top: 16px;
`;
