import * as S from './styles'

import { Modal } from '@components/Modal'
import { Button } from '@components/Button'

type Props = {
  visible: boolean;
  onCancel(): void;
  onRemove(): void;
}

export function RemoveMealModal({visible, onCancel, onRemove}: Props) {
  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>
        <S.ContainerButtons>
          <Button type="SECONDARY" title="Cancelar" onPress={onCancel} />
          <Button type="PRIMARY" title="Sim, excluir" onPress={onRemove} />
        </S.ContainerButtons>
      </S.Container>
    </Modal>
  )
}