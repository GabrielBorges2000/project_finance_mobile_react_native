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
import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/Forms/InputForm';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
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



interface FormData {
  name: string;
  amount: string;
}

const schema = yup.object().shape({
  name: yup
  .string()
  .required('O nome é obrigatório!'),

  amount: yup
  .number()
  .typeError('Informe um valor númerico!')
  .positive('O valor não pode ser negativo!')
  .required('O valor é obrigatório!'),

}).required()

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver:yupResolver(schema)
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

  function handleRegister(form : FormData) {
    if(!transactionType)
      return Alert.alert('Selecione o tipo da transação');

    if(category.key === 'category')
      return Alert.alert('Selecione a categoria');

    const data ={
      name:form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
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
              control={control}
              placeholder='Name'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
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
          onPress={handleSubmit(handleRegister)}
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