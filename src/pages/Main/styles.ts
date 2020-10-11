import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 40px;
  background-color: #fff;
  margin-top: 30px;
`;

export const PageHeaderContainer = styled.View`
  width: 100%;
  height: 50px;
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

export const Button = styled(RectButton)`
  background-color: #5e70ff;
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
