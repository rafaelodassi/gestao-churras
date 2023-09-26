import React from 'react';

import { screen } from '@testing-library/react';

import { Churras } from '../../store/slices/churrasSlice';
import { renderWithProviders } from '../../test-utils/renderWithProviders';

import Search from './Search';

describe('Search', () => {
  it('Should render Search', async () => {
    renderWithProviders(<Search />, {
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

    expect(
      screen.getByPlaceholderText('Pesquise aqui o seu churras pelo nome')
    ).toBeInTheDocument();
  });
});
