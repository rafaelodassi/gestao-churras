'use client';

import React from 'react';

import Beer from '../../public/img/beer.png';
import CardList from '../components/CardList';
import NewRegister from '../components/NewRegister';
import { useAppDispatch } from '../store/hooks';
import { selectChurras, Churras } from '../store/slices/churrasSlice';
import { setOpenDrawer } from '../store/slices/uiSlice';

import * as Styled from './styles';

export default function Home() {
  const dispatch = useAppDispatch();

  const newRegiter = () => {
    dispatch(selectChurras({} as Churras));
    dispatch(setOpenDrawer(true));
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.ContainerInfo>
          <Styled.Beer src={Beer} width={40} alt='Beer' />
          <Styled.ContainerText>
            <Styled.Title>Gestão Churras</Styled.Title>
            <Styled.Description>
              Gerencie seu churras e não deixe faltar nada!
            </Styled.Description>
          </Styled.ContainerText>
        </Styled.ContainerInfo>
        <Styled.ContainerActions>
          <Styled.ContainerSearch>
            <Styled.InputSearch
              type='text'
              placeholder='Pesquise aqui o seu churras'
            />
            <Styled.IconSearch />
          </Styled.ContainerSearch>
          <Styled.ButtonAdd onClick={newRegiter}>
            <Styled.IconAdd />
            Novo churras
          </Styled.ButtonAdd>
        </Styled.ContainerActions>
      </Styled.Header>
      <Styled.Main>
        <CardList />
      </Styled.Main>
      <NewRegister />
    </Styled.Container>
  );
}
