import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Menu = styled.View`
`;

export const IconView = styled.View`
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;
