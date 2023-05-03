import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PromtFormValue } from 'types/enums/form';
import { optionSelect } from 'store/options';
import { FormPage } from './index';

const file = new File(['hello'], 'hello.png', { type: 'image/png' });
const mockFieldForm = {
  firstName: 'Вологда',
  lastName: 'Вологдович',
  birthday: '2005-12-12',
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

    await userEvent.upload(image, file);
    if (image.files) {
      expect(image.files[0]).toBe(file);
    }
    expect(image.files).toHaveLength(1);

    await user.click(buttonSubmit);
    expect(screen.getByText(PromtFormValue.SUCCES)).toBeInTheDocument();
    await new Promise((r) => {
      setTimeout(r, 4100);
    });
    expect(screen.queryByText(PromtFormValue.SUCCES)).toBeNull();
  });
});
