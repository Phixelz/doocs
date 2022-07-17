import React from "react";
import {
  Container,
  Logo,
  Wrapper,
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
      <Logo>doocs.</Logo>

      <Wrapper>
        <ColabArea>
          <UserIcon name="user" />
          <Content>
            <TitleColab>Área do Colaborador</TitleColab>
            <Info>Digite seus dados de acesso</Info>
          </Content>
        </ColabArea>

        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#87A0C6"
        />

        <TextInput
          securyTextEntry
          placeholder="Código de acesso"
          placeholderTextColor="#87A0C6"
        />

        <Button
          disabled={true}
          type="disabled"
          title="Entrar"
        />
      </Wrapper>
    </Container>
  );
}
