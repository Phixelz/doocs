import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Icon,
  IconArea,
  Content,
  Title,
  SubTitle,
} from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  subtitle: string;
}

export function CardList({ title, subtitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconArea>
        <Icon name="folder" />
      </IconArea>

      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
    </Container>
  );
}
