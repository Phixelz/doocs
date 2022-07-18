import React from "react";
import {
  Container,
  Logo,
  Header,
  Peeps,
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
      <Header>
        <Logo>doocs.</Logo>
        <Peeps
          resizeMode="contain"
          source={require("../../assets/peep.png")}
        />
      </Header>

      <Wrapper>
        <ColabArea>
          <UserIcon name="user" />
          <Content>
            <TitleColab>Área do Colaborador</TitleColab>
            <Info>Digite seus dados de acesso</Info>
          </Content>
        </ColabArea>

        <TextInput
          placeholder="Digite seu e-mail"
          placeholderTextColor="#87A0C6"
        />

        <Button
          activeOpacity={0.9}
          type="link"
          title="Recuperar palavra-secreta?"
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
