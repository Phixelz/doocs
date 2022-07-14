import React, { useState } from "react";
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
  SectionView,
  SectionCards,
  SectionTitle,
  ContainerList,
  HeaderList,
  Close,
  ModalList,
} from "../Main/styles";
import { Card } from "../../components/Card";
import { CardList } from "../../components/CardList";
import { Info } from "../../components/Info";

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

      <SectionView>
        <SectionCards>
          <SectionTitle>Doocs</SectionTitle>
          <SubTitle>Visualize o processo dos doocs</SubTitle>
        </SectionCards>

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

        <CardList
          title="Doocs"
          subtitle="Enviados: 4"
        />

        <CardList

          title="Doocs"
          subtitle="Em análise: 4"
        />

        <CardList
          title="Doocs"
          subtitle="Aprovados: 4"
        />

        <CardList
          title="Doocs"
          subtitle="Reprovados: 1"
        />
      </SectionView>
    </Container>
  );
}
