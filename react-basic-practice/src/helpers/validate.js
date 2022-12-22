import REGEXP from '../constants/regexp';

const Validate = (dataInput) => {
  let validateError = {};
  let error = false;

  Object.entries(dataInput).forEach(([key, value]) => {
    if (value === '') {
      validateError = { ...validateError, [key]: 'This input is required.' };
      error = true;
    } else {
      validateError = { ...validateError, [key]: '' };
      error = false;
    }

    if (value !== '') {
      if (!REGEXP[key].test(value)) {
        validateError = { ...validateError, [key]: `${key} invalid` };
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

export default Validate;
