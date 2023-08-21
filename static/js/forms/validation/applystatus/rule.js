export const applyStatusRule = {
  idCard: {
    required: true,
    minlength: 17,
    idCardLengthApplystatus: true,
    idCardPatternApplystatus: true,
    maxlength: 17,
    pattern: /^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$/,
    idCardPattern: true,
  },
  dateOfBirth: {
    required: true,
    dateFormat: true,
    // max: new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
    // min: new Date(new Date().setFullYear(new Date().getFullYear() - 55))
    ageRange: true,
  },
};
