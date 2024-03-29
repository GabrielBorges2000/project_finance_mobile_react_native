import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";

import { Container} from './styles'

interface Props extends TextInputProps {
  name: string;
  control?: Control;

}

export function InputForm({ name, control,  ...rest}: Props){
  return(
    <Container>
          <Input
            {...rest}
          />
    </Container>

  )
}