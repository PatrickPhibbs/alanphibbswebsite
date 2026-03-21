import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '@/components/contact/ContactForm';

global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service required/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('renders service dropdown options', () => {
    render(<ContactForm />);
    const select = screen.getByLabelText(/service required/i);
    expect(select).toBeInTheDocument();
  });

  it('calls /api/contact on submit', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '0861234567' } });
    fireEvent.change(screen.getByLabelText(/service required/i), { target: { value: 'residential' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
      }));
    });
  });

  it('shows success message after successful submit', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/service required/i), { target: { value: 'residential' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });
});
