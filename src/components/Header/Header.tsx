'use client';

import React, { useCallback, useMemo, useEffect } from 'react';

import debounce from 'lodash.debounce';

import Beer from '../../../public/img/beer.png';
import { useAppDispatch } from '../../store/hooks';
import {
  selectChurras,
  Churras,
  searchChurras,
} from '../../store/slices/churrasSlice';
import { setOpenDrawer } from '../../store/slices/uiSlice';

import * as Styled from './styles';

const Header = () => {
  const dispatch = useAppDispatch();

  const newRegiter = () => {
    dispatch(selectChurras({} as Churras));
    dispatch(setOpenDrawer(true));
  };

  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchChurras(e.target.value));
    },
    [dispatch]
  );

  const debouncedChange = useMemo(() => debounce(onSearch, 300), [onSearch]);

  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

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
        <Styled.ContainerSearch>
          <Styled.IconSearch />
          <Styled.InputSearch
            type='text'
            placeholder='Pesquise aqui o seu churras pelo nome'
            onChange={(e) => {
              debouncedChange(e);
            }}
          />
          <Styled.IconClear />
        </Styled.ContainerSearch>
        <Styled.ButtonAdd onClick={newRegiter}>
          <Styled.IconAdd />
          <Styled.TitleAdd>Novo churras</Styled.TitleAdd>
        </Styled.ButtonAdd>
      </Styled.ContainerActions>
    </Styled.Header>
  );
};

export default Header;
