import React from 'react';

import { screen } from '@testing-library/react';

import { Churras } from '../../store/slices/churrasSlice';
import { renderWithProviders } from '../../test-utils/renderWithProviders';

import NewRegister from './NewRegister';

describe('NewRegister', () => {
  it('Should render NewRegister', async () => {
    renderWithProviders(<NewRegister />, {
      preloadedState: {
        churras: {
          churras: [],
          selectedChurras: {} as Churras,
          querySearch: '',
          status: 'idle',
        },
        ui: {
          openDrawer: true,
        },
      },
    });

    expect(screen.getByText('Nome do churras')).toBeInTheDocument();
    expect(screen.getByText('Data e hora do churras')).toBeInTheDocument();
    expect(screen.getByText('Cor do card')).toBeInTheDocument();
    expect(screen.getByText('Descrição')).toBeInTheDocument();
    expect(screen.getByText('Observações')).toBeInTheDocument();
    expect(screen.getByText('Lista de participantes')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Adicione os participantes preenchendo o nome e o valor de contribuição, variando de acordo com a preferência de cada um. Valor sugerido: R$ 20,00.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Adicionar participante')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar churras')).toBeInTheDocument();
  });

  it('Should render NewRegister mode edit', async () => {
    renderWithProviders(<NewRegister />, {
      preloadedState: {
        churras: {
          churras: [],
          selectedChurras: {
            id: '2a54aa4b-826f-43a5-9fe9-f2bd0d3f32d0',
          } as Churras,
          querySearch: '',
          status: 'idle',
        },
        ui: {
          openDrawer: true,
        },
      },
    });

    expect(screen.getByText('Editar churras')).toBeInTheDocument();
    expect(screen.getByText('Atualizar churras')).toBeInTheDocument();
  });
});
