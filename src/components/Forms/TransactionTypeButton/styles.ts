import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export interface IconProps{
  type: 'up' | 'down';
}

export interface ContainerProps{
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  border: 1.5px solid ${(props) => props.theme.colors['text']};
  border-radius: 5px;
  padding: 16px;
  width: 49%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  
`;

export const Icon = styled(Feather)<IconProps>`
  align-items: center;
  font-size: ${RFValue(24)}px;

  ${({ type }) => type === 'up' && css`
    color: ${(props) => props.theme.colors['success']};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${(props) => props.theme.colors['attention']};
  `};
  margin-right: 12px;
`;

export const Title = styled.Text`
  align-items: center;
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors['text_dark']};
  font-family: ${(props) => props.theme.fonts['regular']};
`;

