import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
  padding: 12px 0;
  align-items: center;
  margin: 8px 0;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  padding: 0 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconArea = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: 8px;
  padding: 12px;
`;
