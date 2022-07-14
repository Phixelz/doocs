import React from "react";
import {
  Container,
  Header,
  UserCard,
  Title,
  SubTitle,
  Avatar,
  Name,
  Icon,
  User,
  Content,
} from "./styles";
import { CardList } from "../../components/CardList";

export function UserArea() {
  return (
    <Container>
      <Header>
        <Icon name="arrow-left" />
      </Header>

      <UserCard>
        <Content>
          <Avatar>
            <Name>R</Name>
          </Avatar>

          <User>
            <Title>Rafael Almeida</Title>
            <SubTitle>UI Developer</SubTitle>
          </User>
        </Content>
        <Icon name="log-out" />
      </UserCard>

      <CardList
        type="default"
        title="Dados Pessoais"
        subtitle="Acesse seus dados pessoais"
      />

      <CardList
        type="default"
        title="Holerite"
        subtitle="Acesse os detalhes do seu holerite"
      />

      <CardList
        type="default"
        title="Guia Organizacional"
        subtitle="Acesse o seu guia organizacional"
      />

      <CardList
        type="default"
        title="Configurações"
        subtitle="Altere as configurações do app"
      />
    </Container>
  );
}
