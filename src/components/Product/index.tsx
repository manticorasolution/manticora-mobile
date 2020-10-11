import React, { useState } from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Body,
  ButtonsContainer,
  CancelButton,
  Code,
  ContactButton,
  ContactTextButton,
  Container,
  Footer,
  InfoContainer,
  Name,
  InfoCode,
  InfoSwitch,
  Picture,
  Profile,
  ProfileInfo,
  Label,
  Input,
  InputContainer,
  SwitchInput,
  InputDisabled,
  SwitchContainer,
  DescriptionContainer,
  DescriptionText,
} from './styles';

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
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Container>
      <Profile>
        <Picture source={{ uri: product.avatar }} />

        <ProfileInfo>
          <Name>{product.name}</Name>
        </ProfileInfo>
      </Profile>

      <Body>
        <InputContainer>
          <Label>Fabricante</Label>
          <InputDisabled>Heinz</InputDisabled>
        </InputContainer>

        <DescriptionContainer>
          <Label>Descrição</Label>
          <DescriptionText>Molho de Tomate HEINZ - Ketchup</DescriptionText>
        </DescriptionContainer>

        <InputContainer>
          <Label>Preço Médio</Label>
          <InputDisabled>R$ 15,00</InputDisabled>
        </InputContainer>

        <InputContainer>
          <Label>Preço de Custo</Label>
          <Input keyboardType="numeric">R$ 13,95</Input>
        </InputContainer>

        <InputContainer>
          <Label>Preço de Venda</Label>
          <Input keyboardType="numeric">R$ 16,50</Input>
        </InputContainer>

        <InputContainer>
          <Label>Validade</Label>
          <Input> 01/05/2021 </Input>
        </InputContainer>

        <InputContainer>
          <Label>Quantidade</Label>
          <Input keyboardType="numeric">12</Input>
        </InputContainer>
      </Body>

      <Footer>
        <InfoContainer>
          <SwitchContainer>
            <SwitchInput
              value={isEnabled}
              onValueChange={() => setIsEnabled(!isEnabled)}
              trackColor={{ false: '#767577', true: '#5e70ff' }}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
            />
            <InfoSwitch>
              Vender na Loja
              {'\n'}
              Virtual
            </InfoSwitch>
          </SwitchContainer>
          <InfoCode>
            Cod.
            {'  '}
            <Code>{product.id}</Code>
          </InfoCode>
        </InfoContainer>

        <ButtonsContainer>
          <CancelButton onPress={handleCancel}>
            <FeatherIcon size={33} name="x-circle" color="#fff" />
          </CancelButton>

          <ContactButton onPress={handleRegister}>
            <FeatherIcon size={25} name="clipboard" color="#fff" />
            <ContactTextButton>Cadastrar</ContactTextButton>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default Register;
