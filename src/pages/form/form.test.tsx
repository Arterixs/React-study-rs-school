import { act, getByText, render, screen } from '@testing-library/react';
import { PromtFormValue } from 'types/enums/form';
import userEvent from '@testing-library/user-event';
import { optionSelect } from 'store/options';
import { FormPage } from './index';

const mockFile = new File(['hello'], 'hello.png', { type: 'image/png' });
const mockFieldForm = {
  firstName: 'Вологда',
  lastName: 'Вологдович',
  birthday: '2005-12-12',
  birthdayCard: '12.12.2005',
  country: 'Belarus',
};

jest.setTimeout(30000);

describe('test form', () => {
  it('check render form', () => {
    render(<FormPage option={optionSelect} />);
    const firstName = screen.getByLabelText(/firstName/i, { selector: 'input' });
    const lastName = screen.getByLabelText(/lastName/i, { selector: 'input' });
    const birthday = screen.getByLabelText(/Date of Birth/i, { selector: 'input' });
    const country = screen.getByLabelText(/Country of Residence/i, { selector: 'select' });
    const agree = screen.getByLabelText(/Consent to account processing/i, { selector: 'input' });
    const male = screen.getByLabelText('Male', { selector: 'input' });
    const female = screen.getByLabelText(/female/i, { selector: 'input' });
    const image = screen.getByLabelText(/Upload image/i, { selector: 'input' });
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(birthday).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(agree).toBeInTheDocument();
    expect(male).toBeInTheDocument();
    expect(female).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('check succes submit form', async () => {
    render(<FormPage option={optionSelect} />);
    const user = userEvent.setup();

    const firstName = screen.getByLabelText<HTMLInputElement>(/firstName/i, { selector: 'input' });
    const lastName = screen.getByLabelText<HTMLInputElement>(/lastName/i, { selector: 'input' });
    const birthday = screen.getByLabelText<HTMLInputElement>(/Date of Birth/i, { selector: 'input' });
    const country = screen.getByLabelText<HTMLSelectElement>(/Country of Residence/i, { selector: 'select' });
    const belarus = screen.getByRole<HTMLOptionElement>('option', { name: mockFieldForm.country });
    const agree = screen.getByLabelText<HTMLInputElement>(/Consent to account processing/i, { selector: 'input' });
    const male = screen.getByLabelText<HTMLInputElement>('Male', { selector: 'input' });
    const image = screen.getByLabelText<HTMLInputElement>(/Upload image/i, { selector: 'input' });
    const buttonSubmit = screen.getByRole('button');

    await user.type(firstName, mockFieldForm.firstName);
    expect(firstName.value).toBe(mockFieldForm.firstName);

    await user.type(lastName, mockFieldForm.lastName);
    expect(lastName.value).toBe(mockFieldForm.lastName);

    await user.type(birthday, mockFieldForm.birthday);
    expect(birthday.value).toBe(mockFieldForm.birthday);

    await user.selectOptions(country, [mockFieldForm.country]);
    expect(belarus.selected).toBe(true);

    await user.click(agree);
    expect(agree).toBeChecked();

    await user.click(male);
    expect(male).toBeChecked();

    await userEvent.upload(image, mockFile);
    if (image.files) {
      expect(image.files[0]).toBe(mockFile);
    }

    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.SUCCES)).toBeInTheDocument();
    expect(firstName.value).toBe('');
    expect(birthday.value).toBe('');
    expect(belarus.selected).toBe(false);
    expect(agree).not.toBeChecked();
    await act(
      () =>
        new Promise((r) => {
          setTimeout(r, 4200);
        })
    );
    expect(screen.queryByText(PromtFormValue.SUCCES)).toBeNull();
  });

  it('check submit empty form', async () => {
    render(<FormPage option={optionSelect} />);
    const user = userEvent.setup();
    const buttonSubmit = screen.getByRole('button');
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    await act(
      () =>
        new Promise((r) => {
          setTimeout(r, 4100);
        })
    );
    expect(screen.queryByText(PromtFormValue.FAIL)).toBeNull();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(7);
  });

  it('check validation form', async () => {
    render(<FormPage option={optionSelect} />);
    const user = userEvent.setup();

    const firstName = screen.getByLabelText<HTMLInputElement>(/firstName/i, { selector: 'input' });
    const lastName = screen.getByLabelText<HTMLInputElement>(/lastName/i, { selector: 'input' });
    const birthday = screen.getByLabelText<HTMLInputElement>(/Date of Birth/i, { selector: 'input' });
    const country = screen.getByLabelText<HTMLSelectElement>(/Country of Residence/i, { selector: 'select' });
    const agree = screen.getByLabelText<HTMLInputElement>(/Consent to account processing/i, { selector: 'input' });
    const female = screen.getByLabelText<HTMLInputElement>('Female', { selector: 'input' });
    const image = screen.getByLabelText<HTMLInputElement>(/Upload image/i, { selector: 'input' });
    const buttonSubmit = screen.getByRole('button');

    await user.type(firstName, mockFieldForm.firstName);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(6);

    await user.type(lastName, mockFieldForm.lastName);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(5);

    await user.type(birthday, mockFieldForm.birthday);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(4);

    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(3);

    await user.click(agree);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(2);

    await user.click(female);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(1);

    await userEvent.upload(image, mockFile);
    await user.clear(firstName);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.FAIL)).toBeInTheDocument();
    expect(screen.getAllByTestId(/hint/i)).toHaveLength(1);

    await user.type(firstName, mockFieldForm.firstName);
    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.SUCCES)).toBeInTheDocument();
    expect(screen.queryAllByTestId(/hint/i)).toHaveLength(0);
  });
});

describe('test card form', () => {
  it('check render card', async () => {
    render(<FormPage option={optionSelect} />);
    const user = userEvent.setup();

    const firstName = screen.getByLabelText<HTMLInputElement>(/firstName/i, { selector: 'input' });
    const lastName = screen.getByLabelText<HTMLInputElement>(/lastName/i, { selector: 'input' });
    const birthday = screen.getByLabelText<HTMLInputElement>(/Date of Birth/i, { selector: 'input' });
    const country = screen.getByLabelText<HTMLSelectElement>(/Country of Residence/i, { selector: 'select' });
    const agree = screen.getByLabelText<HTMLInputElement>(/Consent to account processing/i, { selector: 'input' });
    const female = screen.getByLabelText<HTMLInputElement>('Female', { selector: 'input' });
    const image = screen.getByLabelText<HTMLInputElement>(/Upload image/i, { selector: 'input' });
    const buttonSubmit = screen.getByRole('button');

    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(female);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    const card = screen.getByTestId(/form-card/i);
    expect(card).toBeInTheDocument();
    expect(getByText(card, mockFieldForm.firstName)).toBeInTheDocument();
    expect(getByText(card, mockFieldForm.lastName)).toBeInTheDocument();
    expect(getByText(card, mockFieldForm.birthdayCard)).toBeInTheDocument();
    expect(getByText(card, mockFieldForm.country)).toBeInTheDocument();
    expect(getByText(card, 'female')).toBeInTheDocument();
    expect(screen.getByAltText(/image_user/i)).toBeInTheDocument();
  });

  it('check many render card', async () => {
    render(<FormPage option={optionSelect} />);
    const user = userEvent.setup();

    const firstName = screen.getByLabelText<HTMLInputElement>(/firstName/i, { selector: 'input' });
    const lastName = screen.getByLabelText<HTMLInputElement>(/lastName/i, { selector: 'input' });
    const birthday = screen.getByLabelText<HTMLInputElement>(/Date of Birth/i, { selector: 'input' });
    const country = screen.getByLabelText<HTMLSelectElement>(/Country of Residence/i, { selector: 'select' });
    const agree = screen.getByLabelText<HTMLInputElement>(/Consent to account processing/i, { selector: 'input' });
    const female = screen.getByLabelText<HTMLInputElement>('Female', { selector: 'input' });
    const male = screen.getByLabelText<HTMLInputElement>('Male', { selector: 'input' });
    const image = screen.getByLabelText<HTMLInputElement>(/Upload image/i, { selector: 'input' });
    const buttonSubmit = screen.getByRole('button');
    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(female);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    await user.clear(birthday);
    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(female);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    await user.clear(birthday);
    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(female);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    await user.clear(birthday);
    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(male);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    await user.clear(birthday);
    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(female);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    await user.clear(birthday);
    await user.type(firstName, mockFieldForm.firstName);
    await user.type(lastName, mockFieldForm.lastName);
    await user.type(birthday, mockFieldForm.birthday);
    await user.selectOptions(country, [mockFieldForm.country]);
    await user.click(agree);
    await user.click(male);
    await userEvent.upload(image, mockFile);
    await user.click(buttonSubmit);

    expect(screen.getAllByTestId(/form-card/i)).toHaveLength(6);
  });
});
