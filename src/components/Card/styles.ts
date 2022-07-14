import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  padding-right: 8px;
`;

export const Footer = styled.View``;

export const CardTitle = styled.Text`
  font-size: 20px;
  line-height: 32px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardSubTitle = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProgressBar = styled.ProgressBarAndroid`
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.primary};
`;
