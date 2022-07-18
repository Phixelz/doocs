import React from "react";
import {
  Container,
  Logo,
  Header,
  Peeps,
  Wrapper,
  TextInput,
} from "./styles";
import { Button } from "../../components/Button";
import { Info } from "../../components/Info";

export function SignIn() {
  return (
    <Container>
      <Header>
        <Logo>doocs.</Logo>
        <Peeps
          resizeMode="contain"
          source={require("../../assets/peep.png")}
        />
      </Header>

      <Wrapper>
        <Info
          type="signin"
          icon="user"
          title="Área do colaborador"
          subtitle="Digite seus dados de acesso"
        />

        <TextInput
          placeholder="Digite seu e-mail"
          placeholderTextColor="#87A0C6"
        />

        <Button
          activeOpacity={0.9}
          type="link"
          title="Recuperar palavra-secreta"
        />

        <TextInput
          securyTextEntry
          placeholder="Digite sua palavra-secreta"
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
