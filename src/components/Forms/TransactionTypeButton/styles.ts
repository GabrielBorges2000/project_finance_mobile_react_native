import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export interface TypeProps{
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity`
  border: 1px solid ${(props) => props.theme.colors['text']};
  border-radius: 5px;
  padding: 15px 35px;
  width: ${RFValue(160)}px;
  height: ${RFValue(56)}px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)<TypeProps>`
  align-items: center;
  font-size: ${RFValue(24)}px;

  ${({ type }) => type === 'up' && css`
    color: ${(props) => props.theme.colors['success']};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${(props) => props.theme.colors['attention']};
  `};
  margin-right: 14px;
`;

export const Title = styled.Text`
  align-items: center;
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors['text_dark']};
`;

