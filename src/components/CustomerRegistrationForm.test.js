import { render, fireEvent, screen } from '@testing-library/react';
import CustomerRegistrationForm from './CustomerRegistrationForm';

describe('CustomerRegistrationForm', () => {
  test('renders without crashing', () => {
    render(<CustomerRegistrationForm />);
    const headingElement = screen.getByText(/Customer Registration Form/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    render(<CustomerRegistrationForm />);
    const nameInput = screen.getByLabelText(/Customer name:/i);
    const dobInput = screen.getByLabelText(/Date of Birth/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const aadhaarInput = screen.getByLabelText(/Aadhaar Number/i);
    const registrationDateInput = screen.getByLabelText(/Registration Date/i);
    const mobileInput = screen.getByLabelText(/Mobile Number/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(aadhaarInput, { target: { value: '123456789012' } });
    fireEvent.change(registrationDateInput, { target: { value: '2022-01-01' } });
    fireEvent.change(mobileInput, { target: { value: '1234567890' } });

    fireEvent.click(submitButton);
  });
});
