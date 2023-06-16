import * as S from "./styles";

type Props = {
  type: S.CardTypeStyleProps;
  info: string | number;
  description: string;
};

export function CardStatistic({description, info, type}: Props) {
  return (
    <S.Container type={type}>
      <S.Info>{info}</S.Info>
      <S.InfoDescription>{description}</S.InfoDescription>
    </S.Container>
  );
}
