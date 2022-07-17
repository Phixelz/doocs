import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 40px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
flex: 1;
justify-content: flex-end;
`;

export const Logo = styled.Text`
  align-self: center;
  font-family: "Poppins_700Bold";
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: "Poppins_700Bold";
  color: ${({ theme }) => theme.colors.primary};
  line-height: 40px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

export const TextInput = styled.TextInput`
  padding: 12px 12px;
  margin-bottom: 24px;
  border-radius: 8px;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: rgba(57, 106, 178, 0.4);
`;
