import styled from 'styled-components/native';

import { RNCamera } from 'react-native-camera';
import { BarcodeMask } from '@nartc/react-native-barcode-mask';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  width: 90%;
  margin: 20px auto;
`;

export const PageHeaderContainer = styled.View`
  width: 100%;
  height: 50px;
`;

export const CameraContainer = styled.View`
  height: 230px;
  border-radius: 100px;
`;

export const RNCameraSC = styled(RNCamera)`
  flex: 1;
  overflow: hidden;
`;

export const BarcodeMaskSC = styled(BarcodeMask)``;

export const ProductContainer = styled.View`
  flex: 1;
  background-color: #eeeeee;
  margin-top: 40px;
`;
