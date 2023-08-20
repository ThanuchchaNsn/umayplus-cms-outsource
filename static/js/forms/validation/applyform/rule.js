export const applyFormRule = {
  gclid:{
    required: false
  },
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  idCard: {
    required: true,
    minlength: 17,
    idCardLength: true,
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
  province: {
    required: true,
    min: 1,
    // placeholderOption: true,
  },
  postcode: {
    required: true,
    min: 1,

    // placeholderOption: true,
  },
  phone: {
    required: true,
    // number: true,
    minlength: 12,
    maxlength: 12,
    phoneMinLength: true,
    // pattern: /^\d{3}-\d{3}-\d{4}$/,
    ShortFormPhone_Pattern: true,
  },
  salary: {
    required: true,
    min: 7000,
    maxlength: 7,
  },
  career: {
    required: true,
    min: 1,
  },
  company: {
    required: true,
  },
  time: {
    required: true,
    min: 1,
  },
  idStaff: {},
  forStaff: {},
  acceptTerm: {
    required: false,
  },

  forStaff: {
    minlength: 8,
    maxlength: 8,
  },
  idStaff: {
    minlength: 8,
    maxlength: 8,
  },
};
