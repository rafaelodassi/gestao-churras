import React from 'react';

import { screen } from '@testing-library/react';

import { Churras } from '../../store/slices/churrasSlice';
import { renderWithProviders } from '../../test-utils/renderWithProviders';

import Header from './Header';

describe('Header', () => {
  it('Should render Header', async () => {
    renderWithProviders(<Header />, {
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

    expect(screen.getByText('Gestão Churras')).toBeInTheDocument();
    expect(
      screen.getByText('Gerencie seu churras e não deixe faltar nada!')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Pesquise aqui o seu churras pelo nome')
    ).toBeInTheDocument();
    expect(screen.getByText('Novo churras')).toBeInTheDocument();
  });
});
