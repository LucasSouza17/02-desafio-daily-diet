import styled from "styled-components/native";
import {TextInputProps, TextInput} from 'react-native';

export type InputTypeProps = {
  isTextArea?: boolean
}

export const InputField = styled(TextInput).attrs<InputTypeProps>(({isTextArea}) => ({
  multiline: isTextArea,
  numberOfLines: 3
} as TextInputProps))<InputTypeProps>`
  height: ${({isTextArea}) => isTextArea ? 120 : 48}px;

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  padding: 8px;
`
