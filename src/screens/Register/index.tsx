import React from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton/Index';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  FieldsTranactionsTypeButton,
} from './styles'

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

    <Form>
      <Fields>
        <Input
          placeholder='Name'
        />
        <Input
          placeholder='Preço'
        />
        <FieldsTranactionsTypeButton>
          <TransactionTypeButton
            type='up'
            title='Entrada'
          />
          <TransactionTypeButton
            type='down'
            title='Saida'
          />
        </FieldsTranactionsTypeButton>
      </Fields>

      <Button title='Enviar' />

    </Form>


    </Container>
  )
}