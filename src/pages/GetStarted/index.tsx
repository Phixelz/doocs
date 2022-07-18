import React from "react";
import {
  Container,
  Logo,
  Peeps,
  Wrapper,
  Title,
  SubTitle,
} from "../GetStarted/styles";
import { Button } from "../../components/Button";

export function GetStarted() {
  return (
    <Container>
      <Logo>
        doocs.
      </Logo>

      <Wrapper>
        <Peeps
          resizeMode="contain"
          source={require("../../assets/peep.png")}
        />
        <Title>
          Nunca foi tão fácil gerenciar doocs de colaboradores.
        </Title>

        <SubTitle>
          Gerencie doocs de contratação, dados de pagamentos, entre outros.
        </SubTitle>

        <Button
          activeOpacity={0.9}
          type="default"
          title="Começar" />
      </Wrapper>
    </Container>
  );
}