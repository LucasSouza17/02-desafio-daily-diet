import * as S from './styles'

type Props = {
  isInDiet: boolean;
}

export function Tag({isInDiet}: Props) {
  const text = isInDiet ? 'dentro da dieta' : 'fora da dieta';

  return (
    <S.Container>
      <S.Status isInDiet={isInDiet} />
      <S.Title>{text}</S.Title>
    </S.Container>
  )
}