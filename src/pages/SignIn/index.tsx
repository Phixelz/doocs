import React from "react";
import {
  Container,
  Logo,
  Wrapper,
  Title,
  SubTitle,
  TextInput,
} from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Logo>doocs.</Logo>

      <Wrapper>
        <Title>
          Acesso do Colaborador
        </Title>

        <SubTitle>
          Digite seus dados de acesso
        </SubTitle>
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
