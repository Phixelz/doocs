import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(57, 106, 178, 0.1);
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: #396ab2;
  margin-right: 12px;
`;

export const Footer = styled.View``;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-family: "Poppins_700Bold";
  color: #396ab2;
`;

export const CardSubTitle = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: #396ab2;
  margin-bottom: 16px;
`;
