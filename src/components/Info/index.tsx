import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Icon,
  IconView,
  IconArea,
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
        <IconArea>
          <Icon name="alert-circle" />
        </IconArea>
      </IconView>

      <Menu>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Menu>
    </Container>
  );
}
