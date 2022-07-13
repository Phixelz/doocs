import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.Text`
  flex-direction: row;
  padding: 24px 0;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: #396ab2;
`;

export const Menu = styled.View``;

export const MenuView = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: "Poppins_600SemiBold";
  color: #396ab2;
  line-height: 28px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: #396ab2;
`;

export const IconArea = styled.View`
  background-color: rgba(57, 106, 178, 0.1);
  border-radius: 8px;
  padding: 12px;
  margin-right: 12px;
`;
