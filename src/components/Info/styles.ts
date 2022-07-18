import styled, {css} from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface InfoProps {
  type: "default" | "signin";
}

export const Container = styled.View<InfoProps>`
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary_light};

  ${(props) => props.type === 'default' && css`
  padding: 24px;
 `}

 ${(props) => props.type === 'signin' && css`
  padding: 16px;
 `}
`;

export const Icon = styled(Feather)<InfoProps>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 12px;

 ${(props) => props.type === 'signin' && css`
 `}
`;

export const Content = styled.View`
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
