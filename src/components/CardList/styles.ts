import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface Props {
  type: "default" | "info";
}

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  padding: 16px 0;
  margin-bottom: 16px;
  align-items: center;

  ${(props) => props.type === 'info' && css `
  padding: 24px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  margin-bottom: 24px;
 `}
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Menu = styled.View`
padding: 0 12px;
`;

export const MenuView = styled.View`
`;

export const Title = styled.Text<Props>`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'info' && css `
  font-size: 18px;
  line-height: 24px;
 `}
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconArea = styled.View<Props>`
  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: 8px;
  padding: 12px;

  ${(props) => props.type === 'info' && css `
    display: none;
 `}
`;