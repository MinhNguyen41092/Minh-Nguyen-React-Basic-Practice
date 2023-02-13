const checkDataExist = (data, fieldCheck, dataCheck) => {
  const checkHaveData = data.some((dataElement) => dataElement[fieldCheck] === dataCheck);
  return checkHaveData;
};

export default checkDataExist;
