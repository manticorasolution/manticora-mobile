import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Banner,
  ButtonPrimary,
  ButtonsContainer,
  ButtonSecondary,
  ButtonText,
  Container,
  Title,
  TotalConnections,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  function navigateToScan(): void {
    navigate('Scan');
  }

  function navigateToRegister(): void {
    navigate('Register');
  }

  return (
    <Container>
      <Banner source={landingImg} />

      <Title>Como você deseja cadastrar seu produto?</Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={navigateToRegister}>
          <FeatherIcon size={35} name="aperture" color="#fff" />

          <ButtonText>Scan</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary onPress={navigateToScan}>
          <FeatherIcon size={35} name="edit" color="#fff" />

          <ButtonText>Manualmente</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
