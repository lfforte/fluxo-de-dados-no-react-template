import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = (props, dadosForm) => {

  return (

    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form onSubmit={props.atualizar}>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input onChange={props.postaTitulo} value={props.titulo} id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input onChange={props.mudaImagem} value={props.imagem} id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input onChange={props.postaDescricao} value={props.descricao} id="descricao" />
        </StyledLabel>
        <button>Postar dados</button>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
