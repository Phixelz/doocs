import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  justify-content: center;
  margin-top: 35%;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: #396ab2;
  margin-bottom: 4px;
`;

export const Title = styled.Text`
  align-self: center;
  font-family: "Poppins_700Bold";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Doocs = styled.Image`
  width: 380px;
  height: 380px;
  align-self: flex-start;
  margin: 0 60px;
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  font-family: "Poppins_700Bold";
  margin-bottom: 8px;
  color: #396ab2;
`;

export const Description = styled.Text`
  font-size: 17px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
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

export const Content = styled.View``;

export const Info = styled.Text`
  font-size: 15px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export const TitleColab = styled.Text`
  font-size: 17px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
  line-height: 24px;
`;

export const UserIcon = styled(Feather)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 12px;
`;
