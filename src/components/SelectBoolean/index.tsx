import {TouchableOpacityProps} from "react-native"
import * as S from './styles'

type Props = S.SelectedBooleanProps & TouchableOpacityProps;

export function SelectBoolean({isSelected, type, ...rest}: Props) {
  return (
    <S.Container isSelected={isSelected} type={type} {...rest}>
      <S.StatusPoint type={type} />
      <S.Title>{type === "PRIMARY" ? "Sim" : "Não"}</S.Title>
    </S.Container>
  )
}