/**
 * @jest-environment node
 */
import { POST } from '@/app/api/contact/route';

const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-id' });

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: mockSendMail,
  })),
}));

describe('POST /api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.SMTP_HOST = 'smtp.test.com';
    process.env.SMTP_USER = 'user@test.com';
    process.env.SMTP_PASS = 'password';
  });

  it('sends email and returns success', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '0861234567',
        service: 'residential',
        message: 'Hello, I need a quote.',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(mockSendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'alanphibbs@alanphibbs.ie',
        subject: expect.stringContaining('Test User'),
      })
    );
  });

  it('returns 500 on send failure', async () => {
    mockSendMail.mockRejectedValueOnce(new Error('SMTP error'));

    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test',
        email: 'test@example.com',
        phone: '',
        service: 'other',
        message: 'Test',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(500);
  });
});
