import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 40px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled.Text`
  align-self: center;
  font-family: "Poppins_700Bold";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
   font-size: 22px;
  font-family: "Poppins_700Bold";
  color: ${({ theme }) => theme.colors.primary};
`;

export const Peeps = styled.Image`
width: 330px;
height: 250px;
margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

