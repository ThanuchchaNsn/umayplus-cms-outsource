/** OTP page */

import { getCookie } from "../../storage/cookie.js";
import { ShortFormMapValue } from "../../storage/mapping.js";

if ($("#SubmitOTP").length > 0) {
  const data = ShortFormMapValue();
  $(".text-phone").text(data?.txtPhoneNo);

  // var otp = async () => {
  //   const cookie_otp = await getCookie("otp");
  //   // console.log(cookie_otp)
  //   return cookie_otp;
  // }

  (async () => {
    // const arr= await fetchJSON();
    const otp = await getCookie("otp");
    // console.log(JSON.parse(otp))
    const refOTP = JSON.parse(otp).refOTP;
    $(".text-ref").text(refOTP);
  if (!!otp) {
      $(".text-ref").text(refOTP);
  }
  })();  
}
