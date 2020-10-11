import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Banner,
  Button,
  ButtonsContainer,
  ButtonText,
  Container,
  PageHeaderContainer,
  Title,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import PageHeader from '../../components/PageHeader';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  function navigateToScan(): void {
    navigate('Scan');
  }

  function navigateToRegister(): void {
    navigate('Register');
  }

  return (
    <>
      <PageHeaderContainer>
        <PageHeader />
      </PageHeaderContainer>
      <Container>
        <Banner source={landingImg} />

        <Title>Como você deseja cadastrar seu produto?</Title>

        <ButtonsContainer>
          <Button onPress={navigateToScan}>
            <FeatherIcon size={35} name="aperture" color="#fff" />

            <ButtonText>Câmera</ButtonText>
          </Button>

          <Button onPress={navigateToRegister}>
            <FeatherIcon size={35} name="edit" color="#fff" />

            <ButtonText>Manual</ButtonText>
          </Button>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default Landing;
