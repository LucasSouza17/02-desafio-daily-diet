import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 34px;
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  
  flex-direction: row;
  
  align-items: center;
  justify-content: center;
  
  padding: 0px 16px;
  
  gap: 8px;

  border-radius: 17px;
`

export const Status = styled.View<{isInDiet: boolean}>`
  width: 8px;
  height: 8px;

  border-radius: 4px;

  background-color: ${({theme, isInDiet}) => isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`