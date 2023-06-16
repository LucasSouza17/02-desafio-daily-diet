import * as S from './styles'

import happyHero from '@assets/happyCreate/happyCreate.png'
import sadHero from '@assets/sadCreate/sadCreate.png'
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native'

type RouteParams = {
  isInDiet: boolean;
};

export function MealCreated() {
  const route = useRoute();
  const navigation = useNavigation();
  const {isInDiet} = route.params as RouteParams

  const title = isInDiet ? "Continue assim!" : "Que pena!"
  const subtitle = isInDiet ? "Você continua dentro da dieta. Muito bem!" : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"

  function handleGoToHome() {
    navigation.navigate("meals");
  }

  return (
    <S.Container>
      <S.Title isInDiet={isInDiet}>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.HeroImage source={isInDiet ? happyHero : sadHero} />
      <Button title='Ir para página inicial' onPress={handleGoToHome}/>
    </S.Container>
  )
}