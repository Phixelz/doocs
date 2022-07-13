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
} from "../CardList/styles";

interface Props extends TouchableOpacityProps {
  title: string;
  subtitle: string;
}

export function CardList({ title, subtitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <MenuView>
        <IconArea>
          <Icon name="folder" />
        </IconArea>
      </MenuView>

      <Menu>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Menu>
    </Container>
  );
}
