import React from "react";
import { TouchableOpacityProps } from "react-native";
import { CustomButton, ButtonText, Icon } from "../Button/styles";

interface ButtonProps extends TouchableOpacityProps {
  type: "default" | "disabled" | "link";
  title: string;
}

export function Button({ type, title, ...rest }: ButtonProps) {
  return (
    <CustomButton type={type} {...rest}>
      <ButtonText type={type}>{title}</ButtonText>
      <Icon type={type} name="arrow-right" />
    </CustomButton>
  );
}
