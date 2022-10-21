import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props) => props.theme.colors['segundary']};

  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts['medium']};
  font-size: ${RFValue(14)}px;

  color: ${(props) => props.theme.colors['shape']};

  padding: 18px;
`;