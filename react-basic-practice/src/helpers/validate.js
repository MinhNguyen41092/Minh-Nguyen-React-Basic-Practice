import REGEXP from '../constants/regexp';
import ERROR_MESSAGES from '../constants/errorMsg';

/* Check validate */
const validateInput = (dataInput) => {
  let validateError = {};
  let error = {};

  // Check for empty and show error
  Object.entries(dataInput).forEach(([key, value]) => {
    if (value === '') {
      validateError = { ...validateError, [key]: 'This input is required.' };
      error = { ...error, [key]: true };
    } else {
      validateError = { ...validateError, [key]: '' };
      error = { ...error, [key]: false };
    }

    // Check for format and show error
    if (value !== '') {
      if (!REGEXP[key].test(value)) {
        validateError = { ...validateError, [key]: ERROR_MESSAGES[key] };
        error = { ...error, [key]: true };
      } else {
        validateError = { ...validateError, [key]: '' };
        error = { ...error, [key]: false };
      }
    }
  });

  let haveErrorValid = false;

  haveErrorValid = error.email || error.password || error.username;

  return {
    validateError,
    haveErrorValid,
  };
};

export default validateInput;
