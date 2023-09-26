'use client';

import React, { useCallback, useMemo, useEffect } from 'react';

import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchChurras, setQuerySearch } from '../../store/slices/churrasSlice';

import * as Styled from './styles';

const Search = () => {
  const dispatch = useAppDispatch();

  const querySearch = useAppSelector((state) => state.churras.querySearch);

  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchChurras(e.target.value));
    },
    [dispatch]
  );

  const debouncedChange = useMemo(() => debounce(onSearch, 300), [onSearch]);

  const onClear = () => {
    dispatch(setQuerySearch(''));
    dispatch(searchChurras(''));
  };

  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

  return (
    <Styled.ContainerSearch>
      <Styled.IconSearch />
      <Styled.InputSearch
        type='text'
        placeholder='Pesquise aqui o seu churras pelo nome'
        onChange={(e) => {
          dispatch(setQuerySearch(e.target.value));
          debouncedChange(e);
        }}
        value={querySearch}
      />
      <Styled.IconClear onClick={onClear} />
    </Styled.ContainerSearch>
  );
};

export default Search;
