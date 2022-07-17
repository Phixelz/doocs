import React from "react";
import {
  Container,
  Header,
  UserCard,
  Title,
  SubTitle,
  Avatar,
  Peep,
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
            <Peep
              resizeMode="contain"
              source={require("../../assets/avatar.png")}
            />
          </Avatar>

          <User>
            <Title>Rafael Almeida</Title>
            <SubTitle>UI Developer</SubTitle>
          </User>
        </Content>
        <Icon name="log-out" />
      </UserCard>

      <CardList
        title="Dados Pessoais"
        subtitle="Acesse seus dados pessoais"
      />

      <CardList
        title="Holerite"
        subtitle="Acesse os detalhes do seu holerite"
      />

      <CardList
        title="Guia Organizacional"
        subtitle="Acesse o seu guia organizacional"
      />

      <CardList
        title="Configurações"
        subtitle="Altere as configurações do app"
      />
    </Container>
  );
}
