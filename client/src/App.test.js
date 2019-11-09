import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import PlayerData from './components/PlayerData';

test('Renders without crashing', () => {
  // const firstTest = render(<App />);
  // console.log(firstTest);
  render(<App />);
});

test('See if Player Card can be found', () => {
  const {getByTestId} = render(<App />);
  getByTestId('player-card');
});

test('Get homepage title', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
  });
