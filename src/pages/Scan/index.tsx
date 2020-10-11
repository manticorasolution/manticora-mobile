import React, { useState } from 'react';

import { RNCamera } from 'react-native-camera';

import {
  CameraContainer,
  Container,
  RNCameraSC,
  BarcodeMaskSC,
  ProductContainer,
} from './styles';

import Product, { IProduct } from '../../components/Product';

import api from '../../services/api';

interface IProductResponse {
  data: {
    description: string;
    gtin: number;
    thumbnail: string;
    avg_price: number;
    gtins: Array<{
      gtin: number;
      commercial_unit: {
        quantity_packaging: number;
      };
    }>;
  };
}

const Register: React.FC = () => {
  const [product, setProduct] = useState(null as IProduct | null);
  const [pegou, setPegou] = useState(false);

  async function handleBarCode(barcode: string): Promise<void> {
    if (pegou) return;
    setPegou(true);
    const { data } = (await api.get(`/gtins/${barcode}`)) as IProductResponse;
    const quantityIndex = data.gtins.findIndex(
      gtin => String(gtin.gtin) === barcode,
    );
    const productData: IProduct = {
      id: data.gtin,
      avatar: data.thumbnail,
      bio: String(data.gtin),
      cost: data.avg_price.toFixed(2),
      name: data.description,
      subject: data.gtins[quantityIndex].commercial_unit.quantity_packaging,
      whatsapp: String(data.gtin),
    };

    setProduct(productData);
  }

  function handlePegou(): void {
    setPegou(false);
  }

  function handleRegister(): void {
    setPegou(false);
  }

  return (
    <Container>
      <CameraContainer>
        <RNCameraSC
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={({ data: barcode }) => handleBarCode(barcode)}
        >
          {!pegou && <BarcodeMaskSC height={150} maskOpacity={0.5} />}
        </RNCameraSC>
      </CameraContainer>
      <ProductContainer>
        {product && pegou && (
          <Product
            product={product}
            handleCancel={handlePegou}
            handleRegister={handleRegister}
          />
        )}
      </ProductContainer>
    </Container>
  );
};

export default Register;
