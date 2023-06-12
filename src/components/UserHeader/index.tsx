import * as S from "./styles";

import logoImg from "@assets/logo/logo.png";
import userImg from "@assets/user.png";

export function UserHeader() {
  return (
    <S.Container>
      <S.Logo source={logoImg} />

      <S.UserContainer>
        <S.User source={userImg} />
      </S.UserContainer>
    </S.Container>
  );
}
