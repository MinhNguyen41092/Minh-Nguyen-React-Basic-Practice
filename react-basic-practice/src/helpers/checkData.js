const checkData = (data, fileldCheck, dataCheck) => {
  let haveData = false;
  data.find((dataElement) => {
    if (dataElement[fileldCheck] === dataCheck) {
      haveData = true;
    }
    return haveData;
  });
  return haveData;
};

export default checkData;
