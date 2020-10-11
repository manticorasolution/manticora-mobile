import React from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, Title, TopBar } from './styles';

interface IPageHeaderProps {
  navBack?: boolean;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ navBack }) => {
  const { navigate } = useNavigation();

  function goBack(): void {
    navigate('Main');
  }
  return (
    <Container>
      <TopBar>
        {navBack && (
          <BorderlessButton style={{ width: 30 }} onPress={goBack}>
            <Image source={backIcon} resizeMode="contain" />
          </BorderlessButton>
        )}
        <Title>Manticora</Title>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
    </Container>
  );
};

export default PageHeader;
