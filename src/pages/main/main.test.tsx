import { render, screen } from '@testing-library/react';
import { birdsData } from 'store/data';
import { Main } from './Main';

describe('render components', () => {
  it('search', () => {
    render(<Main contentCard={birdsData} />);
    const helloWorldDocument = screen.getByText(/search/i);
    const getInput = screen.getByRole('textbox');
    expect(helloWorldDocument).toBeInTheDocument();
    expect(getInput).toBeInTheDocument();
  });
  it('amount cards', () => {
    render(<Main contentCard={birdsData} />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(6);
  });
  it('name cards', () => {
    render(<Main contentCard={birdsData} />);
    const names = screen.getAllByTestId('title_card').map((it) => it.textContent);
    const checkNames = birdsData[0].map((it) => it.name);
    expect(names).toEqual(checkNames);
  });
});
