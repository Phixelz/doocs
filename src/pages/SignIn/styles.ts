import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 40px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
flex: 1;
justify-content: flex-end;
`;

export const Logo = styled.Text`
  align-self: center;
  font-family: "Poppins_700Bold";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextInput = styled.TextInput`
  padding: 12px 12px;
  margin-bottom: 24px;
  border-radius: 8px;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: rgba(57, 106, 178, 0.4);
`;

export const ColabArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  margin-bottom: 24px;
`;

export const Content = styled.View`
margin: 0 12px;
`;

export const UserIcon = styled(Feather)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleColab = styled.Text`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
  line-height: 24px;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;