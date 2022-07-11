
import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    CustomButton,
    ButtonText,
    Icon,
} from "../Button/styles";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <CustomButton
            activeOpacity={0.8}
            {...rest}>
            <ButtonText>{title}   
            </ButtonText>
            <Icon name="arrow-right" />
        </CustomButton>
    );
}
