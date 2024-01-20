import ListAside from "./listAside/listAside";
import ListBody from "./listBody/listBody";
import * as S from "./listStyles";

export default function List(): JSX.Element {
  return (
    <S.Container>
      <ListBody />
      <ListAside />
    </S.Container>
  );
}
