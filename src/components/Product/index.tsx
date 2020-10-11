import React from 'react';

import { Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Avatar,
  ButtonsContainer,
  CancelButton,
  Code,
  ContactButton,
  ContactTextButton,
  Container,
  Footer,
  InfoContainer,
  Name,
  Info,
  Price,
  Profile,
  ProfileInfo,
  Quantity,
  QuantityInfo,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

export interface IProduct {
  id: number;
  name: string;
  bio: string;
  avatar: string;
  cost: number | string;
  subject: number;
  whatsapp: string;
}

interface IProductItemProps {
  product: IProduct;
  handleCancel: any;
  handleRegister: any;
}

const Register: React.FC<IProductItemProps> = ({
  product,
  handleCancel,
  handleRegister,
}) => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: product.avatar }} />

        <ProfileInfo>
          <Name>{product.name}</Name>
          <QuantityInfo>
            Qnt.
            {'  '}
            <Quantity>{product.subject}</Quantity>
          </QuantityInfo>
        </ProfileInfo>
      </Profile>

      <Footer>
        <InfoContainer>
          <Info>
            Uni.
            {'  '}
            <Price>
              R$
              {product.cost}
            </Price>
          </Info>
          <Info>
            Cod.
            {'  '}
            <Code>{product.id}</Code>
          </Info>
        </InfoContainer>

        <ButtonsContainer>
          <CancelButton onPress={handleCancel}>
            <FeatherIcon size={20} name="x-circle" color="#fff" />
          </CancelButton>

          <ContactButton onPress={handleRegister}>
            <FeatherIcon size={20} name="clipboard" color="#fff" />
            <ContactTextButton>Cadastrar</ContactTextButton>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Register;
