import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;

  padding: 18px 16px;
  margin-bottom: 8px;

  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts['regular']};

  background-color: ${(props) => props.theme.colors['shape']};
  color: ${(props) => props.theme.colors['text_dark']};

  border-radius: 5px;
`;