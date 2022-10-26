import React, { useState } from 'react';
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
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionTypeButtonSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }
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
            title='Income'
            onPress={() => handleTransactionTypeButtonSelect('up')}
            isActive={transactionType === 'up' }
          />
          <TransactionTypeButton
            type='down'
            title='Outcome'
            onPress={() => handleTransactionTypeButtonSelect('down')}
            isActive={transactionType === 'down' }
          />
        </FieldsTranactionsTypeButton>
      </Fields>

      <Button title='Enviar' />

    </Form>


    </Container>
  )
}