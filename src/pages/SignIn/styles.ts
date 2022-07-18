import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
flex-direction: row;
align-items: center;
background-color: ${({ theme }) => theme.colors.secondary_light};
padding: 100px 24px 0;
margin-bottom: ${RFValue(56)}px;
`;

export const Peeps = styled.Image`
width: 350px;
height: 220px;
align-self: flex-end;
`;

export const Wrapper = styled.View`
  padding: 0 16px;
`;

export const Logo = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextInput = styled.TextInput`
  padding: 12px 12px;
  margin: 0 0 24px;
  border-radius: 8px;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: rgba(57, 106, 178, 0.4);
`;