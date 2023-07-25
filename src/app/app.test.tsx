import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from 'app';
import { MemoryRouter } from 'react-router-dom';
import { getValueLocalStorage } from 'utils/helpers/local-storage-api';

describe('test router', () => {
  it('moved pages', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const mainLink = screen.getByTestId('main');
    const aboutLink = screen.getByTestId('about');
    const formLink = screen.getByTestId('form');
    await user.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await user.click(formLink);
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
    await user.click(mainLink);
    expect(screen.queryByTestId('about-page')).not.toBeInTheDocument();
    expect(screen.getByText(/search/i));
  });

  it('error page', () => {
    render(
      <MemoryRouter initialEntries={['/errorPage']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });

  it('check input value', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const mainLink = screen.getByTestId('main');
    const aboutLink = screen.getByTestId('about');
    const getInput = screen.getByRole<HTMLInputElement>('textbox');
    await user.type(getInput, 'В');
    await user.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await user.click(mainLink);
    const value = getValueLocalStorage();
    expect(value).toBe('В');
    expect(getInput.value).toBe('В');
    expect(screen.getAllByTestId('card').length).toBe(2);
  });
});
