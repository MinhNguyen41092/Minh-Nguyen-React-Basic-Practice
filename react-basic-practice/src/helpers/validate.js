import REGEXP from '../constants/regexp';
import ERROR_MESSAGES from '../constants/errorMsg';

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
        validateError = { ...validateError, [key]: ERROR_MESSAGES.ERROR_MESSAGES[key] };
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
