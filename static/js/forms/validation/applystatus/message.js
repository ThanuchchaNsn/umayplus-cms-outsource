export const applyStatusMessage = {
  idCard: {
    required: "กรุณาระบุ หมายเลขบัตรประชาชน",
    // minlength: "หมายเลขเลขที่บัตรประชาชนไม่ครบถ้วน",
    minlength: "กรอกไม่ครบ 13 digits",
    maxlength: "หมายเลขบัตรประชาชนไม่ครบถ้วน",
    pattern: "หมายเลขบัตรประชาชนรูปแบบไม่ถูกต้อง",
  },
  dateOfBirth: {
    required: "กรุณาระบุ วัน/เดือน/ปี เกิด",
    dateFormat: "กรุณาระบุ วัน/เดือน/ปี เกิด",
    ageRange: "ผู้สมัครต้องมีอายุระหว่าง 20-55 ปี ณ วันที่สมัคร",
  }
};
