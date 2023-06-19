import styled from "styled-components/native";
import { ScrollViewProps } from "react-native";

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

export const Form = styled.ScrollView.attrs(
  ({}) =>
    ({
      contentContainerStyle: {
        gap: 24,
      },
    } as ScrollViewProps)
)`
  padding-top: 24px;
`;

export const RowBox = styled.View`
  flex-direction: row;
  gap: 24px;
`;
