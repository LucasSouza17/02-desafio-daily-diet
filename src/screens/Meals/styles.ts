import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1}
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 32px;
  padding-bottom: 8px;
`

export const SectionContainer = styled.View`
  gap: 4px;
  margin-top: 32px;
`

export const SectionText = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1}
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`