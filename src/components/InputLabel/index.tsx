import * as S from './styles';

type Props = {
  label: string;
  children: React.ReactNode
};

export function InputLabel({label, children}: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      {children}
    </S.Container>
  )
}