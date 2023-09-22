'use client';

import Masonry from 'react-masonry-css';

import { DatePicker } from 'antd';

import Beer from '../../public/img/beer.png';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setOpenDrawer } from '../store/slices/uiSlice';

import * as Styled from './styles';

export default function Home() {
  const dispatch = useAppDispatch();
  const openDrawer = useAppSelector((state) => state.ui.openDrawer);

  const data = [
    { id: 1, name: 'Rafael Odassi' },
    { id: 2, name: 'Paola' },
    { id: 3, name: 'Yana' },
    { id: 4, name: 'Gustavo' },
    { id: 5, name: 'Silvana' },
    { id: 6, name: 'Fabrício' },
    { id: 7, name: 'Teste' },
    { id: 8, name: 'Teste 2' },
    { id: 9, name: 'Teste 3' },
    { id: 10, name: 'Teste 4' },
  ];

  const newRegiter = () => {
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
              placeholder='Pesquise aqui os seus churras'
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
        <Masonry
          breakpointCols={{
            default: 7,
            1400: 5,
            1200: 4,
            1000: 3,
            750: 2,
            600: 1,
          }}
          className='masonry-grid'
          columnClassName='masonry-grid-column'
        >
          {data.map((d) => (
            <Styled.Card key={d.id}>{d.name}</Styled.Card>
          ))}
        </Masonry>
      </Styled.Main>
      <DatePicker />
    </Styled.Container>
  );
}
