import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HightLightCard } from '../../components/HightLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  HightLightCards,
  Icon,
  Photo,
  Title,
  TransactionList,
  Transactions,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  LogoutButton,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/04/2020'
    }
] as DataListProps[];

  return (
    <Container>
      <Header>

        <UserWrapper>
          <UserInfo>

            <Photo source={{ uri:'https://avatars.githubusercontent.com/u/112534393?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriel</UserName>
            </User>

          </UserInfo>
          <LogoutButton onPress ={() => {}}>
            <Icon name='power'/>
          </LogoutButton>
        </UserWrapper>

      </Header>

      <HightLightCards>

        <HightLightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HightLightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
        />
        <HightLightCard
          type='total'
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
        />

      </HightLightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item : DataListProps) => item.id}
          renderItem={({item}) => (
            <TransactionCard data={(item)} />
          )}
          showsVerticalScrollIndicator= {false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

      </Transactions>
    </Container>
  )
}