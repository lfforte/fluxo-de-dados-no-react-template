import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({ dadosForm }) => {

  return (
    <ContainerPostagem>
      <Title>{dadosForm.titulo}</Title>
      <Image src={dadosForm.imagem /* ? dadosForm.imagem : "https://picsum.photos/536/354" */} />
      <Description>{dadosForm.descricao}</Description>
    </ContainerPostagem>
  );
};
//"https://picsum.photos/536/354"
export default TelaDaPostagem;
