import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px 0 0;
  margin-bottom: 24px;
`;

export const Peeps = styled.Image`
  width: 48px;
  height: 48px;
`;

export const UserCard = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: "Poppins_600SemiBold";
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const User = styled.View`
  margin: 0 8px;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  align-items: center;
  justify-content: center;
`;
