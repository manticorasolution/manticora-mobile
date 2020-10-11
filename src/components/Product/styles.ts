import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 26px;
`;

export const Picture = styled.Image`
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

export const Body = styled.View`
  background-color: #fff;
  padding: 0px 18px;
  align-items: center;
  margin: 0px 5px 18px 18px;
`;

export const InputContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-bottom-width: 0.5px;
`;

export const DescriptionContainer = styled.View`
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-bottom-width: 0.5px;
  padding: 10px 0px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  font-family: Archivo-Bold;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: Archivo-Regular;
`;

export const Input = styled.TextInput`
  font-size: 14px;
  font-family: Archivo-Bold;
`;

export const InputDisabled = styled.TextInput`
  font-size: 13px;
  font-family: Archivo-Bold;
  color: #bebebe;
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
  justify-content: space-between;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoSwitch = styled.Text`
  font-family: Poppins-SemiBold;
  color: #000;
  font-size: 11px;
`;

export const SwitchInput = styled.Switch``;

export const InfoCode = styled.Text`
  font-family: Poppins-Regular;
  color: #8b8989;
  font-size: 11px;
`;

export const Code = styled.Text`
  font-family: Poppins-Regular;
  color: #778899;
  font-size: 11px;
  text-decoration: underline;
`;

export const ButtonsContainer = styled(RectButton)`
  flex-direction: row;
  margin-top: 7px;
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
