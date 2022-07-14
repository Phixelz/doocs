import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Title,
  SubTitle,
  Icon,
  IconView,
  IconArea,
  Menu,
} from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  subtitle: string;
}

export function CardInfo({ title, subtitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconView>
        <IconArea>
          <Icon name="folder" />
        </IconArea>
      </IconView>

      <Menu>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Menu>
    </Container>
  );
}
