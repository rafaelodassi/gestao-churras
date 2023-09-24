'use client';

import React from 'react';

import CardList from '../components/CardList';
import Header from '../components/Header';
import NewRegister from '../components/NewRegister';

import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Container>
      <Header />
      <Styled.Main>
        <CardList />
      </Styled.Main>
      <NewRegister />
    </Styled.Container>
  );
}
