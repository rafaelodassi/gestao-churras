import '@testing-library/jest-dom/extend-expect';

jest.mock('antd/es/date-picker/locale/pt_BR', () => jest.fn());

jest.mock('antd', () => {
  return {
    ...jest.requireActual('antd'),
    Drawer: jest.fn((p) => p.children),
  };
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
