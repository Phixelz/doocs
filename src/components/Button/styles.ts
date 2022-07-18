import styled, {css} from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface ButtonProps {
  type: "default" | "disabled" | "link";
}

export const CustomButton = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  border-radius: 8px;

  ${(props) => props.type === 'default' && css`
  background-color: ${({ theme }) => theme.colors.primary};
 `}

 ${(props) => props.type === 'disabled' && css`
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
 `}

 ${(props) => props.type === 'link' && css`
  padding: 0;
 `}
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.secondary};

  ${(props) => props.type === 'link' && css`
  font-size: 14px;
  font-family: "Poppins_500Medium";
  color: ${({ theme }) => theme.colors.primary};
 `}
`;

export const Icon = styled(Feather)<ButtonProps>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 8px;

  ${(props) => props.type === 'link' && css`
  display: none;
 `}
`;
