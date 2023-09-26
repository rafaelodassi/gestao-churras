import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { Churras } from '../store/slices/churrasSlice';
import { renderWithProviders } from '../test-utils/renderWithProviders';

import Home from './page';

describe('Home', () => {
  it('Should render Home and click new churras', async () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        churras: {
          churras: [],
          selectedChurras: {} as Churras,
          querySearch: '',
          status: 'idle',
        },
        ui: {
          openDrawer: false,
        },
      },
    });

    const button = screen.getByText('Novo churras') as HTMLInputElement;
    fireEvent.click(button);

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
});
