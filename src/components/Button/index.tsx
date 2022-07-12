import React from "react";
import { TouchableOpacityProps } from "react-native";
import { CustomButton, ButtonText, Icon } from "../Button/styles";

interface ButtonProps extends TouchableOpacityProps {
  type: "default" | "disabled";
  title: string;
}

export function Button({ type, title, ...rest }: ButtonProps) {
  return (
    <CustomButton activeOpacity={0.8} type={type} {...rest}>
      <ButtonText>{title}</ButtonText>
      <Icon name="arrow-right" />
    </CustomButton>
  );
}
