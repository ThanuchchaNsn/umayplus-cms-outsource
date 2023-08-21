// /** Set Cookie */
export const saveCookie = (name, value, pathCookie) => {
  return new Promise((resolve, reject) => {
    let expired = new Date();
    expired.setTime(expired.getTime() + 120 * 60 * 1000);
    const config = {
      expires: expired,
      path: "/",
    };
    if (!!pathCookie) {
      config.path = pathCookie;
    }
    if ($.cookie(name)) {
      if (!!config.path) {
        $.removeCookie(name, config.path);
      } else {
        $.removeCookie(name);
      }
    }
    $.cookie(name, value, config);
    resolve(name);
  });
};

export const getCookie = (name) => {
  return new Promise((resolve, reject) => {
    let cookie = $.cookie(name);
    if (cookie) {
      resolve(cookie?.toString());
    }else{
      resolve(undefined);
    }
  });
};
// export const saveCookie = (formName, pathCookie)=>{
//     const config = {
//       expires: 7,
//     }
//     if(!!pathCookie){
//       config.path = pathCookie;
//     }
//     const form = $(`#${formName}`)
//       .serializeArray()
//       .reduce((json, { name, value }) => {
//         json[name] = value;
//         return json;
//       }, {});
//     const formCookie = JSON.stringify(form);
//     if($.cookie(formName)){
//       if(!!config.path){
//         $.removeCookie(formName, config.path);
//       }else{
//         $.removeCookie(formName);
//       }
//     }
//     $.cookie(formName , formCookie, config)
//     return;
// }

export const deleteCookie = (name, pathCookie) => {
  if ($.cookie(name)) {
    let path = "/";
    if (pathCookie) {
      path = pathCookie;
    }
    $.removeCookie(name, { path: path });
  }
};

export const deleteAllCookie = () => {
  var cookies = $.cookie();
  for(var cookie in cookies) {
    $.removeCookie(cookie);
  }
};


// /** Loading Cookie */
// if(!!$.cookie('ApplyFullForm') && $('PreviewForm')){
//     const cookie = $.cookie('ApplyFullForm');
//     const data = JSON.parse(cookie)
//     Object.entries(data).forEach(([key, value])=>{
//       if(!!value){
//         if(key,$(`input[name=${key}][type="radio"][value="${value}"]`).length>0){
//           $(`input[name=${key}][type="radio"][value="${value}"]`).prop('checked', true);
//         }else{
//           $(`input#${key}`).val(value)
//         }
//       }

//     })
// }

// if(!!$.cookie('ApplyForm') && $('#ApplyFullForm').length>0){
//   const cookie = $.cookie('ApplyForm');
//   const data = JSON.parse(cookie)
//   const result = {
//     step1idCard: data.idCard,
//     step1firstNameThai: data.firstName,
//     step1lastNameThai: data.lastName,
//     step1dateOfBirth: data.dateOfBirth,
//     step1phoneNumber: data.phone,
//     step3salary: data.salary,
//   }
//   Object.entries(result).forEach(([key, value])=>{
//     if(!!value){
//       if(key,$(`input[name=${key}][type="radio"][value="${value}"]`).length>0){
//         $(`input[name=${key}][type="radio"][value="${value}"]`).prop('checked', true);
//       }else{
//         $(`input#${key}`).val(value)
//       }
//     }

//   })
// }
