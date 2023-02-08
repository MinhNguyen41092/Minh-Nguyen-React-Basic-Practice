const hasData = (data, fieldCheck, dataCheck) => {
  const checkHasData = data.some((dataElement) => dataElement[fieldCheck] === dataCheck);
  return checkHasData;
};

export default hasData;
