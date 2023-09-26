import React from 'react';

import { screen } from '@testing-library/react';

import { Churras } from '../../store/slices/churrasSlice';
import { renderWithProviders } from '../../test-utils/renderWithProviders';

import CardList from './CardList';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => jest.fn(),
}));

describe('CardList', () => {
  it('Should render CardList empty', async () => {
    renderWithProviders(<CardList />, {
      preloadedState: {
        churras: {
          churras: [],
          selectedChurras: {} as Churras,
        },
        ui: {
          openDrawer: false,
        },
      },
    });

    expect(
      screen.getByText('Que pena. Nenhum churras foi encontrado!')
    ).toBeInTheDocument();
  });

  it('Should render CardList', async () => {
    renderWithProviders(<CardList />, {
      preloadedState: {
        churras: {
          churras: [
            {
              color: '#ffffff',
              date: '24/09/2023 23:45',
              description: 'Descrição',
              id: '2a54aa4b-826f-43a5-9fe9-f2bd0d3f32d0',
              name: 'Rafael Odassi',
              observation: 'Observações',
              users: [
                {
                  contribution: 20,
                  id: '80e76a5b-fa0d-43ab-ba7e-c4e87a87c48b',
                  name: 'Yana',
                },
              ],
            },
          ],
          selectedChurras: {} as Churras,
          querySearch: '',
          status: 'idle',
        },
        ui: {
          openDrawer: false,
        },
      },
    });

    expect(screen.getByText('Rafael Odassi')).toBeInTheDocument();
    expect(screen.getByText('Descrição')).toBeInTheDocument();
    expect(screen.getByText('Observações')).toBeInTheDocument();
    expect(screen.getByText('24/09/2023 23:45')).toBeInTheDocument();
  });
});
