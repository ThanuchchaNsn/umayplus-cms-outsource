const PREFIX = "/submit_/api/shortform/data";

const PATH_GetProvinceAll = PREFIX + `/province/`;
const PATH_GetAmphurByProvince = PREFIX + `/amphur/`;
const PATH_GetTambolByAmphur = PREFIX + `/tambol/`;
const PATH_GetZipcodeByProvince = PREFIX + `/zipcode/`;
const PATH_GetOccupationAll = PREFIX + `/occupation/`;
const PATH_GetConvenientTimeAll = PREFIX + `/convenienttime/`;

export const GetProvinceAll = async () => {
  try {
    let result = [];
    await $.get(PATH_GetProvinceAll, (data, status) => {
    //   console.log("PATH_GetProvinceAll => ", data);
      result = data?.data?.data || [];
    });
    return result;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const GetZipcodeByProvince = async (provinceId) => {
  try {
    let result = [];
    await $.get(PATH_GetZipcodeByProvince + provinceId, (data, status) => {
    //   console.log("PATH_GetZipcodeByProvince => ", data);
      result = data?.data?.data || [];
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const GetAmphurByProvince = async (provinceId) => {
  try {
    let result = [];
    await $.get(PATH_GetAmphurByProvince + provinceId, (data, status) => {
      result = data?.data?.data || [];
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const GetTambolByAmphur = async (amphurId) => {
  try {
    let result = [];
    await $.get(PATH_GetTambolByAmphur + amphurId, (data, status) => {
      result = data?.data?.data || [];
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const GetOccupationAll = async () => {
  try {
    let result = [];
    await $.get(PATH_GetOccupationAll, (data, status) => {
    //   console.log("PATH_GetOccupationAll => ", data);
      result = data?.data?.data || [];
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const GetConvenientTimeAll = async () => {
  try {
    let result = [];
    await $.get(PATH_GetConvenientTimeAll, (data, status) => {
    //   console.log("PATH_GetConvenientTimeAll => ", data);
      result = data?.data?.data || [];
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
