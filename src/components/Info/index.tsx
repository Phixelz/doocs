import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Icon,
  IconView,
  Menu,
} from "./styles";

interface InfoProps {
  title: string;
  subtitle: string;
}

export function Info({ title, subtitle }: InfoProps) {
  return (
    <Container>
      <IconView>
          <Icon name="alert-circle" />
      </IconView>

      <Menu>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Menu>
    </Container>
  );
}
