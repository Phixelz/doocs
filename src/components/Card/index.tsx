import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Header,
  Footer,
  CardTitle,
  CardSubTitle,
  Icon,
} from "../Card/styles";

interface CardProps extends TouchableOpacityProps {
  title: string;
  subtitle: string;
}

export function Card({ title, subtitle, ...rest }: CardProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Header>
        <Icon name="folder" />
        <CardTitle>{title}</CardTitle>
      </Header>
      
      <Footer>
        <CardSubTitle>{subtitle}</CardSubTitle>
      </Footer>
    </Container>
  );
}
