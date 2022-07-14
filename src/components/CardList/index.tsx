import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Title,
  SubTitle,
  Icon,
  MenuView,
  IconArea,
  Menu,
} from "./styles";

interface Props extends TouchableOpacityProps {
  type: "default" | "info";
  title: string;
  subtitle: string;
}

export function CardList({ type, title, subtitle, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} type={type} {...rest}>
      <MenuView>
        <IconArea type={type}>
          <Icon name="folder" />
        </IconArea>
      </MenuView>

      <Menu>
        <Title type={type}>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Menu>
    </Container>
  );
}
