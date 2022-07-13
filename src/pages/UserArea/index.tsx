import React from "react";
import { CardList } from "../../components/CardList";
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
        title="Dados Pessoais" 
        subtitle="Lorem ipsum dolor" 
      />

      <CardList 
        title="Holerite" 
        subtitle="Lorem ipsum dolor" 
      />

      <CardList 
        title="Guia Organizacional" 
        subtitle="Lorem ipsum dolor" 
      />

      <CardList 
        title="Informações da empresa" 
        subtitle="Lorem ipsum dolor" 
      />
    </Container>
  );
}
