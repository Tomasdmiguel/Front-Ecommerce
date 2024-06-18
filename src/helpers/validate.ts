interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  return {
    isValid,
    message: isValid ? undefined : 'Please enter a valid email address',
  };
};

export const validateEmptyFields = (fields: { [key: string]: string }): ValidationResult => {
  for (const [key, value] of Object.entries(fields)) {
    if (!value) {
      return { isValid: false, message: `Please complete the ${key} field` };
    }
  }
  return { isValid: true };
};
//