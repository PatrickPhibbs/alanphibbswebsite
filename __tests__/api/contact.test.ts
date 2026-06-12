/**
 * @jest-environment node
 */
const mockSend = jest.fn().mockResolvedValue({ id: 'test-id' });

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: (...args: unknown[]) => mockSend(...args) },
  })),
}));

import { POST } from '@/app/api/contact/route';

describe('POST /api/contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.RESEND_API_KEY = 're_test_key';
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
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'alanphibbs@alanphibbs.ie',
        subject: expect.stringContaining('Test User'),
      })
    );
  });

  it('returns 500 on send failure', async () => {
    mockSend.mockRejectedValueOnce(new Error('Resend error'));

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
