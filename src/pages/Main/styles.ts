import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 24px 16px;
  background-color: #fcfdff;
`;

export const Header = styled.View`
  padding: 24px 0 0 0;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  font-size: 24px;
  font-family: "Poppins_700Bold";
  color: #396ab2;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: "Poppins_700Bold";
  color: #396ab2;
  line-height: 28px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: #396ab2;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: #396ab2;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  margin-left: 12px;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #396ab2;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const SectionCards = styled.View`
  margin: 24px 0;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-family: "Poppins_700Bold";
  color: #396ab2;
  line-height: 28px;
`;

export const Grid = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

