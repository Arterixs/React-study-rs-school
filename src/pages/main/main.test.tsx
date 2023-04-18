import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('search cards', () => {
  it('search', async () => {
    const user = userEvent.setup();
    render(<Main contentCard={birdsData} />);
    const getInput = screen.getByRole('textbox');
    await user.type(getInput, 'в');
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(2);
    await user.type(getInput, 'О');
    const card = screen.getAllByTestId('card');
    expect(card.length).toBe(1);
    const name = screen.getByTestId('title_card').textContent;
    expect(name).toBe('Ворон');
    await user.clear(getInput);
    expect(screen.getAllByTestId('card').length).toBe(6);
  });
});
