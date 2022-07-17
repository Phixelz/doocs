import React from "react";
import {
  Container,
  Logo,
  Wrapper,
  Title,
  SubTitle,
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
        <Title>
          Nunca foi tão fácil gerenciar doocs de colaboradores.
        </Title>

        <SubTitle>
          Gerencie doocs de contratação, dados de pagamentos, entre outros.
        </SubTitle>

        <ColabArea>
          <UserIcon name="user" />
          <Content>
            <TitleColab>Acesso do Colaborador</TitleColab>
            <Info>Digite seus dados de acesso</Info>
          </Content>
        </ColabArea>

        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#87A0C6"
        />

        <TextInput
          secureTextEntry
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
