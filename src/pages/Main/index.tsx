import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { LinkButton, ButtonContainer, LinkButtonText } from './styles';

const Register: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ButtonContainer>
      <LinkButton onPress={() => navigation.navigate('Scan')}>
        <LinkButtonText>Scanear Produto</LinkButtonText>
      </LinkButton>
      <LinkButton onPress={() => navigation.navigate('Register')}>
        <LinkButtonText>Cadastrar Produto</LinkButtonText>
      </LinkButton>
    </ButtonContainer>
  );
};

export default Register;
