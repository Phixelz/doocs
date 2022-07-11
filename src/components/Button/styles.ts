import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const CustomButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;
  background-color: #396ab2;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-family: "Poppins_600SemiBold";
  color: #ffffff;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: #ffffff;
  margin-left: 8px;
`;
