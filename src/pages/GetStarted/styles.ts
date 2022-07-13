import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 5%;
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
  margin: 0 50px;
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  font-family: "Poppins_700Bold";
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.Text`
  font-size: 17px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;
