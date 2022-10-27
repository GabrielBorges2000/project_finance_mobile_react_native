import React from "react";

import {
  Container,
  Category,
  Icon,
} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}
export function CategorySelectButton({ title, onPress }: Props){
  return(
    <Container onPress={onPress}>
      <Category
        activeOpacity={0.7}
      >
        {title}
      </Category>
      <Icon name='chevron-down'/>
    </Container>
  )
}
