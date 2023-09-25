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
        },
        ui: {
          openDrawer: false,
        },
      },
    });

    const button = screen.getByText('Novo churras') as HTMLInputElement;
    fireEvent.click(button);

    expect(screen.getByText('Nome do churras')).toBeInTheDocument();
  });
});
