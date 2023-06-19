import { ScrollViewProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  margin-top: -16px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Info = styled.ScrollView.attrs(
  ({}) =>
    ({
      contentContainerStyle: {
        flex: 1,
        gap: 20,
        alignItems: "flex-start"
      },
    } as ScrollViewProps)
)`
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 4px;
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DateDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 4px;
`;

export const ContainerButtons = styled.View`
  gap: 9px;
`;
