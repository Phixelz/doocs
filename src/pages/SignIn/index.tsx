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
  TitleColab,
  UserIcon,
} from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Title>
        doocs.
      </Title>

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
          <TitleColab>
            Área do Colaborador
          </TitleColab>
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
          title="Entrar" />

      </Wrapper>
    </Container>
  );
}
