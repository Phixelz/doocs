import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  padding: 24px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Text`
  font-size: 24px;
  font-family: "Poppins_700Bold";
  color: ${({ theme }) => theme.colors.primary};
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: "Poppins_700Bold";
  line-height: 28px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  padding: 0 12px;
`;

export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: "Poppins_400Regular";
  line-height: 44px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SectionView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const SectionCards = styled.View`
  margin: 24px 0 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-family: "Poppins_600SemiBold";
  color: ${({ theme }) => theme.colors.primary};
  line-height: 28px;
`;

export const HeaderList = styled.View`
  padding: 24px 16px 0;
`;

export const Close = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  align-self: flex-start;
`;

export const ContainerList = styled.ScrollView`
  flex: 1;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ModalList = styled.Modal`
`;