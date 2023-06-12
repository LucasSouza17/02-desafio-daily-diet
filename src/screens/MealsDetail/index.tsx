import { DetailHeader } from "@components/DetailHeader";
import * as S from "./styles";
import { CardStatistic } from "@components/CardStatistic";

export function MealsDetail() {
  return (
    <S.Container>
      <DetailHeader percent={75.91} />
      <S.InfoContainer contentContainerStyle={{paddingBottom: 70}}>
        <S.Title>Estatísticas gerais</S.Title>
        <S.FirstContainerCards>
          <CardStatistic type="GRAY" info="4" description="melhor sequência de pratos dentro da dieta" />
          <CardStatistic type="GRAY" info="109" description="refeições registradas" />
        </S.FirstContainerCards>
        <S.SecondContainerCards>
          <CardStatistic type="GREEN" info="32" description="refeições dentro da dieta"/>
          <CardStatistic type="RED" info="77" description="refeições fora da dieta" />
        </S.SecondContainerCards>
      </S.InfoContainer>
    </S.Container>
  );
}
