import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

/*-------------------------------- Tipagem ---------------------------------- */

interface TransactionProps {
  type: 'positive' | 'negative';
}

/*--------------------------- Container Config -------------------------------*/

export const Container = styled.View`
  background-color: ${props => props.theme.colors['shape']};
  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: 16px;

`;

/*----------------------- Transactions History Cards -------------------------*/


export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  font-family: ${props => props.theme.fonts['regular']};

  color: ${({theme, type}) =>
  type === 'positive' ? theme.colors['success'] : theme.colors['attention']};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${props => props.theme.colors['text']};
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${props => props.theme.colors['text']};

  margin-left: 17px;
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${props => props.theme.colors['text']};
`;