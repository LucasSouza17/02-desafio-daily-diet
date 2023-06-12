import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserContainer = styled.View`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const User = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  object-fit: cover;
`;
