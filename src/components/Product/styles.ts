import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin: 0px 16px;
  flex-wrap: wrap;
  flex: 1;
`;

export const Name = styled.Text`
  font-family: Archivo-Bold;
  color: #32264d;
  font-size: 17px;
  flex-wrap: wrap;
  width: 100%;
`;

export const QuantityInfo = styled.Text`
  font-family: Poppins-Regular;
  color: #8b8989;
  font-size: 15px;
  margin-top: 4px;
`;

export const Quantity = styled.Text`
  font-family: Poppins-Regular;
  color: #2f4f4f;
  font-size: 18px;
  margin-top: 4px;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 18px;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 100%
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-family: Poppins-Regular;
  color: #8b8989;
  font-size: 14px;
`;

export const Code = styled.Text`
  font-family: Poppins-Regular;
  color: #778899;
  font-size: 14px;
  text-decoration: underline;
`;

export const Price = styled.Text`
  font-family: Poppins-Regular;
  color: #32cd32;
  font-size: 16px;
`;

export const ButtonsContainer = styled(RectButton)`
  flex-direction: row;
  margin-top: 16px;
`;

export const CancelButton = styled(RectButton)`
  background-color: #cc1111;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
  background-color: #5e70ff;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ContactTextButton = styled.Text`
  color: #fff;
  font-family: Archivo-Bold;
  font-size: 16px;
  margin-left: 16px;
`;
