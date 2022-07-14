import styled, {css} from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface ButtonProps {
  type: "default" | "disabled";
}

export const CustomButton = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};

 ${(props) => props.type === 'disabled' && css `
  opacity: 0.5;
 `}
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 8px;
`;
