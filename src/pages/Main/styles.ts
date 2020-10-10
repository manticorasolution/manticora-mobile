import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  border-radius: 5px;
  margin: 60px 20px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  align-items: center;
`;

export const LinkButton = styled.TouchableOpacity`
  width: 40%;
  height: 200px;
  background-color: #000fff;
  border-radius: 20px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const LinkButtonText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;
