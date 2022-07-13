import React from "react";
import {
  Container,
  Wrapper,
  Icon,
  Title,
  SubTitle,
  Description,
  TextInput,
  ColabArea,
  Content,
  Info,
  TitleColab,
  UserIcon,
} from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Title>doocs.</Title>

      <Wrapper>
        <Icon name="folder" />
        <SubTitle>
          Nunca foi tão fácil gerenciar doocs de colaboradores.
        </SubTitle>

        <Description>
          Gerencie doocs de contratação, dados de pagamento e outros doocs.
        </Description>

        <ColabArea>
          <UserIcon name="user" />
          <Content>
          <TitleColab>Área do Colaborador</TitleColab>
          <Info>Digite seus dados de acesso</Info>
          </Content>
        </ColabArea>

        <TextInput placeholder="Nome completo" placeholderTextColor="#87A0C6" />

        <TextInput
          secureTextEntry
          placeholder="Código de acesso"
          placeholderTextColor="#87A0C6"
        />

        <Button 
          type="disabled" 
          title="Entrar" 
        />
      </Wrapper>
    </Container>
  );
}