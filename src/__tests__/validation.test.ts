import { describe, it, expect } from 'vitest';
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateContactForm,
  hasErrors,
} from '../utils/validation';
import type { ContactFormData } from '../types';

describe('validateEmail', () => {
  it('should return true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    expect(validateEmail('user+tag@company.org')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(validateEmail('')).toBe(false);
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('missing@domain')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
  });
});

describe('validatePhone', () => {
  it('should return true for valid phone numbers', () => {
    expect(validatePhone('+353 1 234 5678')).toBe(true);
    expect(validatePhone('0035312345678')).toBe(true);
    expect(validatePhone('087-123-4567')).toBe(true);
  });

  it('should return true for empty phone (optional field)', () => {
    expect(validatePhone('')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(validatePhone('abc')).toBe(false);
    expect(validatePhone('123')).toBe(false);
  });
});

describe('validateRequired', () => {
  it('should return true for non-empty strings', () => {
    expect(validateRequired('hello')).toBe(true);
    expect(validateRequired('  hello  ')).toBe(true);
  });

  it('should return false for empty or whitespace strings', () => {
    expect(validateRequired('')).toBe(false);
    expect(validateRequired('   ')).toBe(false);
  });
});

describe('validateContactForm', () => {
  const validFormData: ContactFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Corp',
    phone: '+353 1 234 5678',
    service: 'streetview',
    message: 'I need streetview services for my business.',
    budget: '50000',
  };

  it('should return no errors for valid form data', () => {
    const errors = validateContactForm(validFormData);
    expect(hasErrors(errors)).toBe(false);
  });

  it('should return error for missing name', () => {
    const data = { ...validFormData, name: '' };
    const errors = validateContactForm(data);
    expect(errors.name).toBe('Name is required');
  });

  it('should return error for invalid email', () => {
    const data = { ...validFormData, email: 'invalid-email' };
    const errors = validateContactForm(data);
    expect(errors.email).toBe('Please enter a valid email address');
  });

  it('should return error for short message', () => {
    const data = { ...validFormData, message: 'Hi' };
    const errors = validateContactForm(data);
    expect(errors.message).toBe('Message must be at least 10 characters');
  });
});

describe('hasErrors', () => {
  it('should return true when errors exist', () => {
    expect(hasErrors({ name: 'Required' })).toBe(true);
  });

  it('should return false when no errors', () => {
    expect(hasErrors({})).toBe(false);
    expect(hasErrors({ name: undefined })).toBe(false);
  });
});
