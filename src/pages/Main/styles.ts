import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: Poppins-Regular;
  color: #000;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const ButtonPrimary = styled(RectButton)`
  background-color: #9871f5;
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonSecondary = styled(RectButton)`
  background-color: #04d361;
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: Archivo-Bold;
  color: #fff;
  font-size: 18px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins-Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
