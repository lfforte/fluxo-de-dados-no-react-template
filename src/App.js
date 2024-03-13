import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dadosForm, setDadosForm] = useState({});

  const postaTitulo = (e) => {
    setTitulo(e.target.value);
  }

  const mudaImagem = (e) => {
    setImagem(e.target.value);
  }

  const postaDescricao = (e) => {
    setDescricao(e.target.value);
  }

  const atualizar = (e) => {
    e.preventDefault()

    const newForm = {
      titulo,
      descricao,
      imagem
    }
    setDadosForm(newForm);
    setTitulo('');
    setImagem('');
    setDescricao('');
  }

  return (
    <>
      <GlobalStyle />

      <Container>

        <FormularioPostagem
          titulo={titulo} postaTitulo={postaTitulo}
          imagem={imagem} mudaImagem={mudaImagem}
          descricao={descricao} postaDescricao={postaDescricao}
          atualizar={atualizar}
        />

        <TelaDaPostagem
          dadosForm={dadosForm}
        />

      </Container>
    </>
  );
}

export default App;
