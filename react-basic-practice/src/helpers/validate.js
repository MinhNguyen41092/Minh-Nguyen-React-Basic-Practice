import REGEXP from '../constants/regexp';

/* Check validate */
const validateInput = (dataInput) => {
  let validateError = {};
  let error = false;

  // Check for empty and show error
  Object.entries(dataInput).forEach(([key, value]) => {
    if (value === '') {
      validateError = { ...validateError, [key]: 'This input is required.' };
      error = true;
    } else {
      validateError = { ...validateError, [key]: '' };
      error = false;
    }

    // Check for format and show error
    if (value !== '') {
      if (!REGEXP[key].test(value)) {
        if (key === 'email') {
          validateError = { ...validateError, [key]: `${key} is invalid` };
        }
        if (key === 'username') {
          validateError = { ...validateError, [key]: `${key} includes first and last name, no number` };
        }
        if (key === 'password') {
          validateError = { ...validateError, [key]: `${key} must contain at least 8 characters.` };
        }
        error = true;
      } else {
        validateError = { ...validateError, [key]: '' };
        error = false;
      }
    }
  });

  return {
    validateError,
    error,
  };
};

export default validateInput;
