import React from "react";
import {
  Container,
  Content,
  Title,
  SubTitle,
  Icon,
} from "./styles";

interface InfoProps {
  type: "default" | "signin";
  title: string;
  subtitle: string;
  icon: string;
}

export function Info({ type, icon, title, subtitle }: InfoProps) {
  return (
    <Container type={type}>
      <Icon type={type} name={icon} />
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Container>
  );
}
