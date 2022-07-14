import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Header,
  Footer,
  CardTitle,
  CardSubTitle,
  Icon,
  ProgressBar,
} from "./styles";

interface CardProps extends TouchableOpacityProps {
  title: string;
  subtitle: string;
}

export function Card({ title, subtitle, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <Header>
        <Icon name="folder" />
        <CardTitle>{title}</CardTitle>
      </Header>

      <Footer>
        <CardSubTitle>{subtitle}</CardSubTitle>
      </Footer>

      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={0.5}
      />
    </Container>
  );
}
