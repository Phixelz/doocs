import React, { useState } from "react";
import { FlatList } from "react-native";
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
  ContainerList,
  HeaderList,
  Close,
  ModalList,
  List,
} from "../Main/styles";
import { Card } from "../../components/Card";
import { CardList } from "../../components/CardList";
import { Info } from "../../components/Info";

const DOOCS = [
  {
    id: "1",
    title: "Doocs",
    subtitle: "Enviados: 4",
  },
  {
    id: "2",
    title: "Doocs",
    subtitle: "Em análise: 4",
  },
  {
    id: "3",
    title: "Doocs",
    subtitle: "Aprovados: 4",
  },
  {
    id: "4",
    title: "Doocs",
    subtitle: "Reprovados: 4",
  },
];

export function Main() {
  const [visibleModal, setVisibleModal] = useState(false);

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
        onPress={() => setVisibleModal(true)}
        title="Doocs"
        subtitle="Envie os doocs pendentes"
      />

      <ModalList
        visible={visibleModal}
        animationType="slide"
        onRequestClose={() => setVisibleModal(false)}
      >
        <HeaderList>
          <Close onPress={() => setVisibleModal(false)} name="x" />
        </HeaderList>

        <ContainerList>
          <Info
            title="Doocs pendentes"
            subtitle="Envie todos os doocs pendentes"
          />

          <CardList
            title="Dooc 1"
            subtitle="Clique para acessar o dooc"
          />

          <CardList
            title="Dooc 2"
            subtitle="Clique para acessar o dooc"
          />

          <CardList
            title="Dooc 3"
            subtitle="Clique para acessar o dooc"
          />

          <CardList
            title="Dooc 4"
            subtitle="Clique para acessar o dooc"
          />

          <CardList
            title="Dooc 5"
            subtitle="Clique para acessar o dooc"
          />
        </ContainerList>
      </ModalList>

      <SectionCards>
        <SectionTitle>Doocs</SectionTitle>
        <SubTitle>Visualize o processo dos doocs</SubTitle>
      </SectionCards>

      <FlatList
        data={DOOCS}
        renderItem={({ item }) => {
          return (
            <List>
              <CardList title={item.title} subtitle={item.subtitle} />
            </List>
          );
        }}
      />
    </Container>
  );
}
