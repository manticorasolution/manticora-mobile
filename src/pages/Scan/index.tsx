import React, { useState } from 'react';

import { RNCamera } from 'react-native-camera';

import {
  CameraContainer,
  Container,
  RNCameraSC,
  BarcodeMaskSC,
  PageHeaderContainer,
} from './styles';

import Product, { IProduct } from '../../components/Product';

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';

interface IProductResponse {
  data: {
    description: string;
    gtin: number;
    thumbnail: string;
    avg_price: number;
    brand: {
      name: string;
    };
    ncm: {
      description: string;
    };
  };
}

const Register: React.FC = () => {
  const [product, setProduct] = useState(null as IProduct | null);
  const [disableCamera, setDisableCamere] = useState(false);

  async function handleBarCode(barcode: string): Promise<void> {
    if (disableCamera) return;
    setDisableCamere(true);
    const { data } = (await api.get(`/gtins/${barcode}`)) as IProductResponse;
    const productData: IProduct = {
      id: data.gtin,
      picture: data.thumbnail,
      average_cost: data.avg_price.toFixed(2),
      name: data.description,
      description: data.ncm.description,
      producer: data.brand.name,
    };

    setProduct(productData);
  }

  function handleDisableCamere(): void {
    setDisableCamere(false);
  }

  function handleRegister(): void {
    setDisableCamere(false);
  }

  return (
    <>
      <PageHeaderContainer>
        <PageHeader navBack />
      </PageHeaderContainer>
      <Container>
        {!(product && disableCamera) ? (
          <CameraContainer>
            <RNCameraSC
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              onBarCodeRead={({ data: barcode }) => handleBarCode(barcode)}
            >
              <BarcodeMaskSC height={150} maskOpacity={0.5} />
            </RNCameraSC>
          </CameraContainer>
        ) : (
          <Product
            product={product}
            handleCancel={handleDisableCamere}
            handleRegister={handleRegister}
          />
        )}
      </Container>
    </>
  );
};

export default Register;
