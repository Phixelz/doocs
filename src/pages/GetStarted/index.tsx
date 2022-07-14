import React from "react";
import {
  Container,
  Doocs,
  Wrapper,
  Icon,
  Title,
  SubTitle,
  Description,
} from "../GetStarted/styles";
import { Button } from "../../components/Button";

export function GetStarted() {
  return (
    <Container>
      <Title>
        doocs.
      </Title>

      <Doocs
        resizeMode="contain"
        source={require("../../assets/folder.png")}
      />

      <Wrapper>
        <Icon name="folder" />
        <SubTitle>
          Nunca foi tão fácil gerenciar doocs de colaboradores.
        </SubTitle>

        <Description>
          Gerencie doocs de contratação, dados de pagamento e outros doocs.
        </Description>

        <Button
          type="default"
          title="Começar" />
      </Wrapper>

    </Container>
  );
}
