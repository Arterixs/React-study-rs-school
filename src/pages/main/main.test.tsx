import { render, screen } from '@testing-library/react';
import { birdsData } from 'store/data';
import { Main } from './main';

test('render nav-components', () => {
  render(<Main contentCard={birdsData} />);
  const helloWorldDocument = screen.getByText(/search/i);
  expect(helloWorldDocument).toBeInTheDocument();
});
