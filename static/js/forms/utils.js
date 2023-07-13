export const isValidThaiNationalID = (idCard) => {
    if (idCard == null) return false;
    let id = idCard.split("-").join("");
    if (id.length !== 13) return false;
    let i;
    let sum = 0;
    // STEP1 - get only first 12 digits
    for (i = 0, sum = 0; i < 12; i++) {
      // STEP 2 - multiply each digit with each index (reverse)
      // STEP 3 - sum multiply value together
      sum += parseInt(id.charAt(i)) * (13 - i);
    }
    // STEP 4 - mod sum with 11
    const mod = sum % 11;
    // STEP 5 - subtract 11 with mod, then mod 10 to get unit
    const check = (11 - mod) % 10;
    // STEP 6 - if check is match the digit 13th is correct
    if (check === parseInt(id.charAt(12))) {
      return true;
    }
    return false;
  };
  
  //CountDown
  export const countTimeFormat = () => {
    const currentDate = new Date();
  
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours()+1;
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
  
    const formattedDate =
      day +
      " " +
      monthNames[monthIndex] +
      " " +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    return formattedDate;
  };
  
  // $("#modalCountdownStatus")
  
  const countTime = () => {
    let date = new Date.now();
    date.setHours(date.getHours() + 1);
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    let formattedDate = date.toLocaleString("en-US", options);
    // console.log(formattedDate);
  
    // "January 27, 2023 at 5:16:51 PM" -> "31 December 2023 23:59:59"
    return formattedDate;
  };
  
  
  export function getUtmQuery(){
      var url = document.location.href;
      var qs = url.substring(url.indexOf('?') + 1).split('&');
      for(var i = 0, result = {}; i < qs.length; i++){
          qs[i] = qs[i].split('=');
          result[qs[i][0]] = decodeURIComponent(qs[i][1]);
      }
      return result;
  }
  
  
  fetch('https://jsonip.com', { mode: 'cors' })
    .then((resp) => resp.json())
    .then((ip) => {
      window.JSONIP = ip;
  });
  
    