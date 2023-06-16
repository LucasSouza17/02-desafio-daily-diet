import styled, { css } from "styled-components/native";

type StatusDiet = {
  isInDiet: boolean
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  
  padding: 32px;
`

export const Title = styled.Text<StatusDiet>`
    ${({ theme, isInDiet }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  text-align: center;
`

export const Subtitle = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-top: 8px;
  text-align: center;
`

export const HeroImage = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 40px;
`;