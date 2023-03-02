import React, { useState } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Forms/Button';
import { InputForm } from '../../components/Forms/InputForm';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  Transactiontype,
} from './styles'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton/Index';

interface FormData {
  name: string;
  amount: string;
}

// const schema = yup.object().shape({
//   name: yup
//   .string()
//   .required('O nome é obrigatório!'),

//   amount: yup
//   .number()
//   .typeError('Informe um valor númerico!')
//   .positive('O valor não pode ser negativo!')
//   .required('O valor é obrigatório!'),

// }).required()

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name='name'
              placeholder='Name'
              autoCapitalize='sentences'
              autoCorrect={false}
            />
            <InputForm
              name='amount'
              placeholder='Preço'
              keyboardType='numeric'
            />

            <Transactiontype>
              <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title='OutCome'
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
            </Transactiontype>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>

          <Button
          title='Enviar'
          // onPress={}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>

      </Container>
    </TouchableWithoutFeedback>
  )
}