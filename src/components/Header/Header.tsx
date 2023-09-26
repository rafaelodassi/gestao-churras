'use client';

import React from 'react';

import Beer from '../../../public/img/beer.png';
import { useAppDispatch } from '../../store/hooks';
import { selectChurras, Churras } from '../../store/slices/churrasSlice';
import { setOpenDrawer } from '../../store/slices/uiSlice';
import Search from '../Search';

import * as Styled from './styles';

const Header = () => {
  const dispatch = useAppDispatch();

  const newRegiter = () => {
    dispatch(selectChurras({} as Churras));
    dispatch(setOpenDrawer(true));
  };

  return (
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
        <Search />
        <Styled.ButtonAdd onClick={newRegiter}>
          <Styled.IconAdd />
          <Styled.TitleAdd>Novo churras</Styled.TitleAdd>
        </Styled.ButtonAdd>
      </Styled.ContainerActions>
    </Styled.Header>
  );
};

export default Header;
