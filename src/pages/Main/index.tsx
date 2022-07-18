import React, { useState } from "react";
import {
  Container,
  Logo,
  Header,
  Title,
  SubTitle,
  Icon,
  Avatar,
  Peep,
  Content,
  User,
  Section,
  SectionTitle,
  ContainerList,
  HeaderList,
  Close,
  ModalList,
  StatusList,
  SectionList,
} from "../Main/styles";
import { Card } from "../../components/Card";
import { CardList } from "../../components/CardList";
import { Info } from "../../components/Info";

const Doocs = [
  {
    id: "1",
    title: "Doocs",
    subtitle: "Enviados: 1",
  },
  {
    id: "2",
    title: "Doocs",
    subtitle: "Em análise: 2",
  },
  {
    id: "3",
    title: "Doocs",
    subtitle: "Aprovados: 1",
  },
  {
    id: "4",
    title: "Doocs",
    subtitle: "Reprovados: 1",
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
            <Peep
              resizeMode="contain"
              source={require("../../assets/avatar.png")}
            />
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
            type="default"
            icon="info"
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

      <StatusList>
        <SectionList
          sections={[
            {
              sectiontitle: "Doocs",
              sectionsubtitle: "Acesse o status dos doocs",
              data: Doocs
            }
          ]}
          renderItem={({ item }) => (
            <CardList
              title={item.title}
              subtitle={item.subtitle}
            />
          )}
          renderSectionHeader={({ section }) => (
            <Section>
              <SectionTitle>{section.sectiontitle}</SectionTitle>
              <SubTitle>{section.sectionsubtitle}</SubTitle>
            </Section>
          )}
        />
      </StatusList>
    </Container>
  );
}
