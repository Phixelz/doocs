import React from "react";
import {
  Container,
  Logo,
  Header,
  Title,
  SubTitle,
  Icon,
  Avatar,
  Name,
  Content,
  User,
  SectionCards,
  SectionTitle,
} from "../Main/styles";
import { Card } from "../../components/Card";

export function Main() {
  return (
    <Container>
      <Logo>doocs.</Logo>
      <Header>
        <Content>
          <Avatar>
            <Name>R</Name>
          </Avatar>

          <User>
            <Title>Olá, Rafael =)</Title>
            <SubTitle>UI Developer</SubTitle>
          </User>
        </Content>

        <Icon name="bell" />
      </Header>

      <Card
        title="Doocs"
        subtitle="Conclua o envio dos doocs solicitados pelo RH"
      />

      <SectionCards>
        <SectionTitle>Doocs</SectionTitle>
        <SubTitle>Visualize o processo dos doocs</SubTitle>
      </SectionCards>
    </Container>
  );
}
