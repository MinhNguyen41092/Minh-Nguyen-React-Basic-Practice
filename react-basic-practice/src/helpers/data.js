const hasData = (data, fileldCheck, dataCheck) => {
  const checkHasData = data.some((dataElement) => dataElement[fileldCheck] === dataCheck);
  return checkHasData;
};

export default hasData;
