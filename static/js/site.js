// // // Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// // // for details on configuring this project to bundle and minify static web assets.

// // Write your JavaScript code.

//navbar
// Data
// $(location).attr('href')

// if(location.pathname == '/404'){

//     // $("panel-bg").addClass("blue");
//     $("#Panel-Bg,#main-sidenav,#main-navbar").remove();

// }

// $(location).attr('href')
//   var pathname = location.pathname;
//   console.log(pathname)
//   $('#Panel-Bg').val(pathname);

const table = document.getElementById("datatable-clickable-rows");
const modal = document.getElementById("modal-clickable-rows");
const modalBody = document.getElementById("modal-body-clickable-rows");
const modalHeader = document.getElementById("modal-header-clickable-rows");

const modalInstance = new mdb.Modal(modal);

const setupButtons = (action) => {
  document
    .getElementsByClassName(`${action}-email-button`)
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();

        const index = button.getAttribute("data-mdb-index");

        console.log(`${action} message: ${index}`, messages[index]);
      });
    });
};

const columns = [
  { label: "ID", field: "id" },
  { label: "FIle Name", field: "fileName" },
  { label: "Status", field: "preview", sort: false },
  { label: "Uploaded Date", field: "date" },
  { label: "Actions", field: "actions", sort: false },
];

const messages = [
  {
    id: "P1234567",
    fileName: "Umay Plus Lorem Ipsum.pdf",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed metus ultricies, sollicitudin est nec, blandit turpis. Fusce venenatis nisi volutpat, pharetra elit eu, ullamcorper metus. Vestibulum dapibus laoreet aliquam. Maecenas sed magna ut libero consequat elementum. Maecenas euismod pellentesque pulvinar. Morbi sit amet turpis eget dolor rutrum eleifend. Sed bibendum diam nec diam posuere pulvinar. Cras ac bibendum arcu.",
    date: "11/12/2019",
  },
  {
    id: "P2234567",
    fileName: "Lorem Ipsum is simply dummy.pdf",
    message:
      "Quisque tempor ligula eu lobortis scelerisque. Mauris tristique mi a erat egestas, quis dictum nibh iaculis. Sed gravida sodales egestas. In tempus mollis libero sit amet lacinia. Duis non augue sed leo imperdiet efficitur faucibus vitae elit. Mauris eu cursus ligula. Praesent posuere efficitur cursus.",
    date: "10/12/2019",
  },
  {
    id: "P3234567",
    fileName: "Lorem Ipsum is simply.pdf",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed metus ultricies, sollicitudin est nec, blandit turpis. Fusce venenatis nisi volutpat, pharetra elit eu, ullamcorper metus. Vestibulum dapibus laoreet aliquam. Maecenas sed magna ut libero consequat elementum. Maecenas euismod pellentesque pulvinar. Morbi sit amet turpis eget dolor rutrum eleifend. Sed bibendum diam nec diam posuere pulvinar. Cras ac bibendum arcu.",
    date: "09/12/2019",
  },
  {
    id: "P4234567",
    fileName: "Lorem Ipsum is simply dummy.pdf",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed metus ultricies, sollicitudin est nec, blandit turpis. Fusce venenatis nisi volutpat, pharetra elit eu, ullamcorper metus. Vestibulum dapibus laoreet aliquam. Maecenas sed magna ut libero consequat elementum. Maecenas euismod pellentesque pulvinar. Morbi sit amet turpis eget dolor rutrum eleifend. Sed bibendum diam nec diam posuere pulvinar. Cras ac bibendum arcu.",
    date: "08/12/2019",
  },
];

const rows = messages.map((email, i) => {
  const getPreview = (message, length) => {
    if (message.length <= length) return message;

    return `${message.slice(0, length)}...`;
  };

  return {
    ...email,
    preview: getPreview(email.message, 20),
    actions: `
        
          <a role="button" class="star-email-button text-secondary mr-1" data-mdb-index="${i}">
            <i class="fas fa-eye"></i>
          </a>
          <a role="button" class="star-email-button text-secondary mx-1" data-mdb-index="${i}">
          <i class="fas fa-link"></i>
          </a>
          <a role="button" class="delete-email-button text-secondary mx-1" data-mdb-index="${i}">
            <i class="fa fa-trash-alt"></i>
          </a>
        `,
  };
});

table.addEventListener("rowClick.mdb.datatable", (e) => {
  const { index } = e;
  const { message, title, from } = messages[index];

  modalHeader.innerText = title;
  modalBody.innerHTML = `
        <h6 class="mb-4">From: <strong>${from}</strong></h6>
        <p>${message}</p>
      `;

  modalInstance.show();
});

table.addEventListener("render.mdb.datatable", () => {
  setupButtons("star");
  setupButtons("delete");
});

const datatableInstance = new mdb.Datatable(table, {
  columns,
  rows,
});
// ----------------------

const dataChartDataLabelsExample_gender = {
  type: "pie",
  data: {
    labels: ["Female", "Male"],

    datasets: [
      {
        label: "Traffic",
        data: [30, 10],
        backgroundColor: ["#00B4F1", "#003F67"],
      },
    ],
  },
};
const dataChartDataLabelsExample_os = {
  type: "pie",
  data: {
    labels: ["IOS", "Android", "Windows", "Other"],
    datasets: [
      {
        label: "Traffic",
        data: [10, 10, 10, 10],
        backgroundColor: ["#00B4F1", "#003F67", "#A2AAAD", "#E31C79"],
      },
    ],
  },
};

// Options
const optionsChartDataLabelsExample_gender = {
  dataLabelsPlugin: true,
  options: {
    responsive: true,
    // maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 39, // Set the desired font size here
          },
        },
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          // Assign the data to the variable and format it according to your needs
          let dataArr = dataChartDataLabelsExample_gender.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = (value * 100) / sum + "%";
          return percentage;
        },
        color: "white",
        labels: {
          title: {
            font: {
              size: "40",
            },
          },
        },
      },
    },
  },
};

// Options
const optionsChartDataLabelsExample_os = {
  dataLabelsPlugin: true,
  options: {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 39, // Set the desired font size here
          },
        },
      },
      datalabels: {
        formatter: (value, ctx) => {
          let sum = 0;
          // Assign the data to the variable and format it according to your needs
          let dataArr = dataChartDataLabelsExample_os.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = (value * 100) / sum + "%";
          return percentage;
        },
        color: "white",
        labels: {
          title: {
            font: {
              size: "40",
            },
          },
        },
      },
    },
  },
};

new mdb.Chart(
  document.getElementById("chart-data-mdb-labels-gender"),
  dataChartDataLabelsExample_gender,
  optionsChartDataLabelsExample_os
);
new mdb.Chart(
  document.getElementById("chart-data-mdb-labels-os"),
  dataChartDataLabelsExample_os,
  optionsChartDataLabelsExample_gender
);

// const sidenav = document.getElementById("main-sidenav");

// // const sidenavInstance = new mdb.Sidenav.getInstance(sidenav);

// let innerWidth = null;

// const setMode = (e) => {
//   // Check necessary for Android devices
//   if (window.innerWidth === innerWidth) {
//     return;
//   }

//   innerWidth = window.innerWidth;

//   if (window.innerWidth < 1400) {
//     sidenavInstance.changeMode("over");
//     sidenavInstance.hide();
//   } else {
//     sidenavInstance.changeMode("side");
//     sidenavInstance.show();
//   }
// };

// // setMode();

// // Event listeners
// // window.addEventListener("resize", setMode);

// const searchFocus = document.getElementById('search-focus');
// const keys = [
//   { keyCode: 'AltLeft', isTriggered: false },
//   { keyCode: 'ControlLeft', isTriggered: false },
// ];

// window.addEventListener('keydown', (e) => {
//   keys.forEach((obj) => {
//     if (obj.keyCode === e.code) {
//       obj.isTriggered = true;
//     }
//   });

//   const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

//   if (shortcutTriggered) {
//     searchFocus.focus();
//   }
// });

// window.addEventListener('keyup', (e) => {
//   keys.forEach((obj) => {
//     if (obj.keyCode === e.code) {
//       obj.isTriggered = false;
//     }
//   });
// });

// const dataLine = {
//   type: "line",
//   data: {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday ",
//     ],
//     datasets: [
//       {
//         label: "Current period",
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//       {
//         label: "Previous period",
//         data: [28, 48, 40, 19, 86, 27, 90],
//         backgroundColor: "rgba(66, 133, 244, 0.0)",
//         borderColor: "#33b5e5",
//         pointBorderColor: "#33b5e5",
//         pointBackgroundColor: "#33b5e5",
//       },
//     ],
//   },
// };

// new mdb.Chart(document.getElementById("chart-users"), dataLine);

// const dataPageViews = {
//   type: "line",
//   data: {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday ",
//     ],
//     datasets: [
//       {
//         label: "Current period",
//         data: [25, 49, 40, 21, 56, 75, 30],
//       },
//       {
//         label: "Previous period",
//         data: [58, 18, 30, 59, 46, 77, 90],
//         backgroundColor: "rgba(66, 133, 244, 0.0)",
//         borderColor: "#33b5e5",
//         pointBorderColor: "#33b5e5",
//         pointBackgroundColor: "#33b5e5",
//       },
//     ],
//   },
// };

// new mdb.Chart(document.getElementById("chart-page-views"), dataPageViews);

// const dataAverageTime = {
//   type: "line",
//   data: {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday ",
//     ],
//     datasets: [
//       {
//         label: "Current period",
//         data: [431, 123, 435, 123, 345, 234, 124],
//       },
//       {
//         label: "Previous period",
//         data: [654, 234, 123, 432, 533, 422, 222],
//         backgroundColor: "rgba(66, 133, 244, 0.0)",
//         borderColor: "#33b5e5",
//         pointBorderColor: "#33b5e5",
//         pointBackgroundColor: "#33b5e5",
//       },
//     ],
//   },
// };

// new mdb.Chart(
//   document.getElementById("chart-average-time"),
//   dataAverageTime
// );

// const dataBounceRate = {
//   type: "line",
//   data: {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday ",
//     ],
//     datasets: [
//       {
//         label: "Current period",
//         data: [41, 12, 35, 13, 45, 34, 12],
//       },
//       {
//         label: "Previous period",
//         data: [65, 24, 13, 43, 33, 42, 22],
//         backgroundColor: "rgba(66, 133, 244, 0.0)",
//         borderColor: "#33b5e5",
//         pointBorderColor: "#33b5e5",
//         pointBackgroundColor: "#33b5e5",
//       },
//     ],
//   },
// };

// new mdb.Chart(document.getElementById("chart-bounce-rate"), dataBounceRate);

// const pieChartsOptions = {
//   dataLabelsPlugin: true,
//   options: {
//     legend: {
//       position: "right",
//       labels: {
//         boxWidth: 10,
//       },
//     },
//     plugins: {
//       datalabels: {
//         formatter: (value, ctx) => {
//           let sum = 0;
//           let dataArr = dataPieCurrent.data.datasets[0].data;
//           dataArr.map((data) => {
//             sum += data;
//           });
//           let percentage = ((value * 100) / sum).toFixed(2) + "%";
//           return percentage;
//         },
//         color: "white",
//         labels: {
//           title: {
//             font: {
//               size: "14",
//             },
//           },
//         },
//       },
//     },
//   },
// };

// // Pie chart current
// const dataPieCurrent = {
//   type: "pie",
//   data: {
//     labels: ["New visitor", "Returning visitor"],
//     datasets: [
//       {
//         label: "Traffic",
//         data: [502355, 423545],
//         backgroundColor: [
//           "rgba(66, 133, 244, 0.6)",
//           "rgba(77, 182, 172, 0.6)",
//         ],
//       },
//     ],
//   },
// };

// new mdb.Chart(
//   document.getElementById("pie-chart-current"),
//   dataPieCurrent,
//   pieChartsOptions
// );

// // Pie chart previous
// const dataPiePrevious = {
//   type: "pie",
//   data: {
//     labels: ["New visitor", "Returning visitor"],
//     datasets: [
//       {
//         label: "Traffic",
//         data: [402355, 523545],
//         backgroundColor: [
//           "rgba(66, 133, 244, 0.6)",
//           "rgba(77, 182, 172, 0.6)",
//         ],
//       },
//     ],
//   },
// };

// new mdb.Chart(
//   document.getElementById("pie-chart-previous"),
//   dataPiePrevious,
//   pieChartsOptions
// );

// // const sidenav = document.getElementById("main-sidenav");
// // const sidenavInstance = mdb.Sidenav.getInstance(sidenav);

// // let innerWidth = null;

// // const setMode = (e) => {
// //   // Check necessary for Android devices
// //   if (window.innerWidth === innerWidth) {
// //     return;
// //   }

// //   innerWidth = window.innerWidth;

// //   if (window.innerWidth < 1400) {
// //     sidenavInstance.changeMode("over");
// //     sidenavInstance.hide();
// //   } else {
// //     sidenavInstance.changeMode("side");
// //     sidenavInstance.show();
// //   }
// // };

// // setMode();

// // // Event listeners
// // window.addEventListener("resize", setMode);

// // const searchFocus = document.getElementById('search-focus');
// // const keys = [
// //   { keyCode: 'AltLeft', isTriggered: false },
// //   { keyCode: 'ControlLeft', isTriggered: false },
// // ];

// // window.addEventListener('keydown', (e) => {
// //   keys.forEach((obj) => {
// //     if (obj.keyCode === e.code) {
// //       obj.isTriggered = true;
// //     }
// //   });

// //   const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

// //   if (shortcutTriggered) {
// //     searchFocus.focus();
// //   }
// // });

// // window.addEventListener('keyup', (e) => {
// //   keys.forEach((obj) => {
// //     if (obj.keyCode === e.code) {
// //       obj.isTriggered = false;
// //     }
// //   });
// // });

// // const chartMarketingSourcesOption = {
// //   dataLabelsPlugin: true,
// //   options: {
// //     legend: {
// //       position: "right",
// //       labels: {
// //         boxWidth: 10,
// //       },
// //     },
// //     plugins: {
// //       tooltip: {
// //         callbacks: {
// //           label: function (context) {
// //             return " WATTS: " + context.formattedValue;
// //           },
// //         },
// //       },
// //       datalabels: {
// //         formatter: (value, ctx) => {
// //           let sum = 0;
// //           let dataArr = dataChartMarketingSources.data.datasets[0].data;
// //           dataArr.map((data) => {
// //             sum += data;
// //           });
// //           let percentage = ((value * 100) / sum).toFixed(2) + "%";
// //           return percentage;
// //         },
// //         color: "white",
// //         labels: {
// //           title: {
// //             font: {
// //               size: "13",
// //             },
// //           },
// //         },
// //       },
// //     },
// //   },
// // };

// // // Chart devices 1
// // const dataChartMarketingSources = {
// //   type: "pie",
// //   data: {
// //     labels: ["Kitchen", "Bedroom", "Living room"],
// //     datasets: [
// //       {
// //         label: "Energy consumption",
// //         data: [81, 53, 35],
// //         backgroundColor: [
// //           "rgba(63, 81, 181, 0.5)",
// //           "rgba(77, 182, 172, 0.5)",
// //           "rgba(66, 133, 244, 0.5)",
// //         ],
// //       },
// //     ],
// //   },
// // };

// // new mdb.Chart(
// //   document.getElementById("chart-consumption-by-room"),
// //   dataChartMarketingSources,
// //   chartMarketingSourcesOption
// // );

// // var innter1 = false;
// // var innter2 = false;
// // $(".carousel-inner-1").show();
// // $(".carousel-inner-2").hide();

// // $(`#handleBtn01`).on("click", () => {
// //   innter1 = true;
// //   innter2 = false;

// //   if (innter1 == true) {
// //     console.log("test");
// //     $(".carousel-inner-1").show();
// //     $(".carousel-inner-2").hide();
// //   }
// // });

// // $(`#handleBtn02`).on("click", () => {
// //   innter1 = false;
// //   innter2 = true;
// //   if (innter2 == true) {
// //     console.log("test02");
// //     $(".carousel-inner-1").hide();
// //     $(".carousel-inner-2").show();
// //   }
// // });

// // $(`#handleBtn1`).on("click", () => {
// //   innter1 = true;
// //   innter2 = false;

// //   if (innter1 == true) {
// //     console.log("test");
// //     $(".carousel-inner-1").show();
// //     $(".carousel-inner-2").hide();
// //   }
// // });

// // $(`#handleBtn2`).on("click", () => {
// //   innter1 = false;
// //   innter2 = true;
// //   if (innter2 == true) {
// //     $(".carousel-inner-1").hide();
// //     $(".carousel-inner-2").show();
// //   }
// // });

// // var atm1 = false;
// // var atm2 = false;
// // var atm3 = false;

// // $(`.atm-1`).show();
// // $(`.atm-2`).hide();
// // $(`.atm-3`).hide();

// // $(`#handleBtnAtm1`).on("click", () => {
// //   atm1 = true;
// //   atm2 = false;
// //   atm3 = false;
// //   if (atm1 == true) {
// //     $(`.atm-1`).show();
// //     $(`.atm-2`).hide();
// //     $(`.atm-3`).hide();
// //   }
// // });

// // $(`#handleBtnAtm2`).on("click", () => {
// //   atm1 = false;
// //   atm2 = true;
// //   atm3 = false;
// //   if (atm2 == true) {
// //     $(`.atm-1`).hide();
// //     $(`.atm-2`).show();
// //     $(`.atm-3`).hide();
// //   }
// // });

// // $(`#handleBtnAtm3`).on("click", () => {
// //   atm1 = false;
// //   atm2 = false;
// //   atm3 = true;
// //   if (atm3 == true) {
// //     $(`.atm-1`).hide();
// //     $(`.atm-2`).hide();
// //     $(`.atm-3`).show();
// //   }
// // });

// // var scene = document.getElementById("scene");

// // if (scene) {
// //   var parallaxInstance = new Parallax(scene, {
// //     relativeInput: true,
// //     hoverOnly: true,
// //   });
// // }

// // $(".term-content-body").scroll(function () {
// //   console.log($(this)[0].scrollHeight -1);
// //   console.log($(this).scrollTop() + $(this).innerHeight());

// //   if (
// //     $(this).scrollTop() + $(this).innerHeight() >=
// //     $(this)[0].scrollHeight - 1
// //   ) {
// //     console.log($(this)[0].scrollHeight);
// //     $("#btn-accept-term").prop("disabled", false);
// //     $("#btn-ndid-accept-term").prop("disabled", false);
// //   }
// //   $;
// // });

// // function OTPInput() {
// //   const inputs = document.querySelectorAll("#otp > *[id]");
// //   for (let i = 0; i < inputs.length; i++) {
// //     inputs[i].addEventListener("keydown", function (event) {
// //       if (event.key === "Backspace") {
// //         inputs[i].value = "";
// //         if (i !== 0) inputs[i - 1].focus();
// //       } else {
// //         if (i === inputs.length - 1 && inputs[i].value !== "") {
// //           return true;
// //         } else if (event.keyCode > 47 && event.keyCode < 58) {
// //           inputs[i].value = event.key;
// //           if (i !== inputs.length - 1) inputs[i + 1].focus();
// //           event.preventDefault();
// //           // } else if (event.keyCode > 64 && event.keyCode < 91) {
// //           //   inputs[i].value = String.fromCharCode(event.keyCode);
// //           //   if (i !== inputs.length - 1) inputs[i + 1].focus();
// //           //   event.preventDefault();
// //         }
// //       }
// //     });
// //   }
// // }
// // OTPInput();

// // // getDate
// // var d = new Date();

// // var month = d.getMonth() + 1;
// // var day = d.getDate();

// // var output =
// //   d.getFullYear() +
// //   "/" +
// //   (month < 10 ? "0" : "") +
// //   month +
// //   "/" +
// //   (day < 10 ? "0" : "") +
// //   day;

// // //var test = document.getElementById("test");
// // //var parallaxInstance = new Parallax(test, {
// // //    relativeInput: true,
// // //});

// // // header sticky
// // //var header = document.getElementById("myHeader");
// // //var sticky = header.offsetTop;

// // //window.onscroll = function () {
// // //    myFunction();
// // //};

// // //function myFunction() {
// // //    if (window.pageYOffset > sticky) {
// // //        header.classList.add("sticky");
// // //    } else {
// // //        header.classList.remove("sticky");
// // //    }
// // //}
// // // $(document).ready(function () {
// // //   $("tr:odd").css({
// // //     "background-color": "#D7F5FF",
// // //     // "color":"#fff"
// // //   });
// // // });

// // (function ($) {
// //   $(document).ready(function () {
// //     // $("tr:odd").css({
// //     //     "background-color": "#D7F5FF",
// //     //     // "color":"#fff"
// //     // }
// //     // );
// //     //navbar active

// //     $(".dateOfBirth").datepicker({
// //       onSelect: function (dateText) {
// //         console.log("Selected date: " + dateText + "; input's current value: " + this.value);
// //       }
// //     });
// //     var currentPage = $(".render-page").attr("id");
// //     $(".nav-item." + currentPage)
// //       .find(".nav-link")
// //       .addClass("active");

// //     //service page
// //     $(".btn-service-form").each(function (index) {
// //       $(this).click(function () {
// //         var currentActive = $(".btn-service-form.active");
// //         currentActive.removeClass("active");
// //         $(this).addClass("active");
// //         if (index == 0) {
// //           $(".service-form2-sec").fadeOut(500, function () {
// //             $(".service-form2-sec").css({
// //               display: "none",
// //             });

// //             $(".service-form1-sec").fadeIn(500);
// //             $(".service-form1-sec").css({
// //               display: "block",
// //             });
// //           });
// //         } else {
// //           $(".service-form1-sec").fadeOut(500, function () {
// //             $(".service-form1-sec").css({
// //               display: "none",
// //             });

// //             $(".service-form2-sec").fadeIn(500);
// //             $(".service-form2-sec").css({
// //               display: "block",
// //             });
// //           });
// //         }
// //       });
// //     });

// //     $(".step-use-btn").each(function (i) {
// //       $(this).click(function () {
// //         console.log(i)
// //         var currentClick = $(this);
// //         var currentActive = $(".step-use-btn.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".carousel-step-use-display").each(function (y) {
// //           if (i == y) {
// //             console.log(i)
// //             console.log(y)
// //             var currentClick2 = $(this);
// //             var currentActive2 = $(".carousel-step-use-display.active");
// //             currentActive2.fadeOut(200, function () {
// //               currentActive2.removeClass("active");
// //               currentClick2.fadeIn(200);
// //               currentClick2.addClass("active");
// //             });
// //           }
// //         });
// //       });
// //     });
// //     $(".select-type-blog-nav").each(function (i) {
// //       $(this).click(function () {
// //         if (i == 0) {
// //           $(".breadcrumb-custom-blog.active").css("display", "none");
// //         } else if (i == 1) {
// //           $(".breadcrumb-custom-blog.active").css("display", "block");
// //           $(".breadcrumb-custom-blog.active").html("ไลฟ์สไตล์");
// //         } else if (i == 2) {
// //           $(".breadcrumb-custom-blog.active").css("display", "block");
// //           $(".breadcrumb-custom-blog.active").html("ทิปส์");
// //         } else if (i == 3) {
// //           $(".breadcrumb-custom-blog.active").css("display", "block");
// //           $(".breadcrumb-custom-blog.active").html("สาระความรู้");
// //         }
// //       });
// //     });

// //     $(".step-use-btn-mobile-item-2").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".step-use-btn-mobile-item-2.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".carousel-step-use-display-mobile-2").each(function (y) {
// //           if (i == y) {
// //             var currentClick2 = $(this);
// //             var currentActive2 = $(
// //               ".carousel-step-use-display-mobile-2.active"
// //             );
// //             currentActive2.fadeOut(200, function () {
// //               currentActive2.removeClass("active");
// //               currentClick2.fadeIn(200);
// //               currentClick2.addClass("active");
// //             });
// //           }
// //         });
// //       });
// //     });

// //     $(".step-use-btn-mobile-item-4").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".step-use-btn-mobile-item-4.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".carousel-step-use-display-mobile-4").each(function (y) {
// //           if (i == y) {
// //             var currentClick2 = $(this);
// //             var currentActive2 = $(
// //               ".carousel-step-use-display-mobile-4.active"
// //             );
// //             currentActive2.fadeOut(200, function () {
// //               currentActive2.removeClass("active");
// //               currentClick2.fadeIn(200);
// //               currentClick2.addClass("active");
// //             });
// //           }
// //         });
// //       });
// //     });

// //     $(".step-use-btn-mobile-item-5").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".step-use-btn-mobile-item-5.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".carousel-step-use-display-mobile-5").each(function (y) {
// //           if (i == y) {
// //             var currentClick2 = $(this);
// //             var currentActive2 = $(
// //               ".carousel-step-use-display-mobile-5.active"
// //             );
// //             currentActive2.fadeOut(200, function () {
// //               currentActive2.removeClass("active");
// //               currentClick2.fadeIn(200);
// //               currentClick2.addClass("active");
// //             });
// //           }
// //         });
// //       });
// //     });

// //     $(".select-custom-blog-item").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".select-custom-blog-item.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         currentActive.fadeOut(200, function () {
// //           currentActive.removeClass("active");
// //           currentClick.fadeIn(200);
// //           currentClick.addClass("active");
// //         });
// //       });
// //     });

// //     $(".select-custom-video-item").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".select-custom-video-item.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         currentActive.fadeOut(200, function () {
// //           currentActive.removeClass("active");
// //           currentClick.fadeIn(200);
// //           currentClick.addClass("active");
// //         });
// //       });
// //     });

// //     //$(".submit-document-type").each(function (i) {
// //     //    $(this).click(function () {
// //     //        var currentClick = $(this);
// //     //        var currentActive = $(".submit-document-type.active");
// //     //        currentActive.removeClass("active");
// //     //        currentClick.addClass("active");
// //     //        $(".submit-document-info").each(function (y) {
// //     //            if (i == y) {
// //     //                var currentClick2 = $(this);
// //     //                var currentActive2 = $(".submit-document-info.active");
// //     //                currentActive2.removeClass("active");
// //     //                currentClick2.addClass("active");
// //     //                currentClick2.fadeOut(200, function () {
// //     //                    currentActive2.removeClass("active");
// //     //                    currentClick2.addClass("active");
// //     //                    currentClick2.fadeIn(200);
// //     //                });
// //     //            }
// //     //        });
// //     //    });
// //     //});

// //     //$(".recommend-card-mobile-slider-items").slick({
// //     //    slidesToShow: 1,
// //     //    slidesToScroll: 1,
// //     //    arrows: false,
// //     //    prevArrow: ".slick-arrow-custom-prev",
// //     //    nextArrow: ".slick-arrow-custom-next",
// //     //    fade: true,
// //     //    asNavFor: ".slider-nav",
// //     //});
// //     $(".recommend-card-mobile-slider-nav").slick({
// //       slidesToShow: 4,
// //       slidesToScroll: 4,
// //       //asNavFor: '.slider-for',
// //       //dots: true,
// //       //centerMode: true,
// //       //focusOnSelect: true
// //     });

// //     $(".select-custom-blog").slick({
// //       slidesToShow: 2,
// //       slidesToScroll: 2,
// //     });

// //     $(".select-custom-video").slick({
// //       slidesToShow: 2,
// //       slidesToScroll: 2,
// //     });

// //     $(".recommend-card-mobile").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".recommend-card-mobile.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".recommend-item-mobile").each(function (j) {
// //           if (i - 3 == j + 1) {
// //             var currentClick2 = $(this);
// //             var currentActive2 = $(".recommend-item-mobile.active");
// //             currentActive2.fadeOut(200, function () {
// //               currentActive2.removeClass("active");
// //               currentClick2.fadeIn(200);
// //               currentClick2.addClass("active");
// //             });
// //           }
// //         });
// //       });
// //     });

// //     // $("#service .step-use-title").each(function (i) {
// //     //   $(this).click(function (e) {
// //     //     e.preventDefault();
// //     //     var currentClick = $(this);
// //     //     var currentActive = $(".step-use-title.active");
// //     //     currentActive.removeClass("active");
// //     //     currentClick.addClass("active");
// //     //     $(".carousel-step-use-display").each(function (j) {
// //     //       if (i == j) {
// //     //         console.log(j);
// //     //         console.log(i);
// //     //         var currentClick2 = $(this);
// //     //         var currentActive2 = $(".carousel-step-use-display.active");
// //     //         currentActive2.fadeOut(200, function () {
// //     //           currentActive2.removeClass("active");
// //     //           currentClick2.fadeIn(200);
// //     //           currentClick2.addClass("active");
// //     //         });
// //     //       }
// //     //     });
// //     //   });
// //     // });

// //     //$(".step-use-slider-for").slick({
// //     //    slidesToShow: 1,
// //     //    slidesToScroll: 1,
// //     //    fade: true,
// //     //    arrows: false,
// //     //    asNavFor: ".step-use-slider-nav",
// //     //});

// //     $(".step-use-slider-nav").slick({
// //       slidesToShow: 4,
// //       slidesToScroll: 4,
// //     });

// //     $(".step-recommend-select").on("change", function () {
// //       var valueChange = this.value;
// //       $(".carousel-step-use-display").each(function (i) {
// //         if (valueChange - 1 == i) {
// //           var currentSelected = $(this);
// //           var currentActive = $(".carousel-step-use-display.active");
// //           currentActive.removeClass("active");
// //           currentSelected.addClass("active");
// //           currentSelected.fadeOut(200, function () {
// //             currentActive.removeClass("active");
// //             currentSelected.addClass("active");
// //             currentSelected.fadeIn(200);
// //           });
// //         }
// //       });
// //     });

// //     $(".carousel-promotion-page").slick({
// //       dots: true,
// //       infinite: true,
// //       speed: 800,
// //       slidesToShow: 1,
// //       adaptiveHeight: true,
// //       prevArrow: ".slick-arrow-custom-prev",
// //       nextArrow: ".slick-arrow-custom-next",
// //     });

// //     $(".loan-calculater-type").each(function (index) {
// //       $(this).click(function () {
// //         var num = "";
// //         if (index == 0) {
// //           num = 25 / 100;
// //         } else {
// //           num = 1980 / 100;
// //         }
// //         var date = $("#rangenumber2").val();
// //         var range = $("#rangenumber1").val();

// //         var result = (parseInt(range) * parseFloat(num) * parseInt(date)) / 365;
// //         var currentClick = $(this);
// //         var currentActive = $(".loan-calculater-type.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".show-loan-calculater-result-interest-rat").fadeOut(
// //           200,
// //           function () {
// //             $(".show-loan-calculater-result-interest-rat").html(num + "%");
// //             $(".show-loan-calculater-result-interest-rat").fadeIn(200);
// //           }
// //         );

// //         $(".show-loan-calculater-total-result").fadeOut(200, function () {
// //           $(".show-loan-calculater-total-result").html(result);
// //           $(".show-loan-calculater-total-result").number(true, 2);
// //           $(".show-loan-calculater-total-result").fadeIn(200);
// //         });
// //         $("#range1").removeAttr("disabled");
// //         $("#range2").removeAttr("disabled");
// //         $("#rangenumber1").removeAttr("disabled");
// //         $("#rangenumber2").removeAttr("disabled");
// //       });
// //     });

// //     $("#range1").on("change", function () {
// //       var valueChange = this.value;
// //       var interestRate = $(".show-loan-calculater-result-interest-rat").html();
// //       var date = $("#rangenumber2").val();

// //       var result =
// //         (parseInt(valueChange) * parseFloat(interestRate) * parseInt(date)) /
// //         365;

// //       console.log(result);
// //       $(".show-loan-calculater-result-amount").fadeOut(200, function () {
// //         $(".show-loan-calculater-result-amount").html(valueChange);
// //         $(".show-loan-calculater-result-amount").number(true, 2);
// //         $(".show-loan-calculater-result-amount").fadeIn(200);
// //       });

// //       $(".show-loan-calculater-total-result").fadeOut(200, function () {
// //         $(".show-loan-calculater-total-result").html(result);
// //         $(".show-loan-calculater-total-result").number(true, 2);
// //         $(".show-loan-calculater-total-result").fadeIn(200);
// //       });
// //     });

// //     $("#rangenumber1").on("change", function () {
// //       var valueChange = this.value;
// //       var interestRate = $(".show-loan-calculater-result-interest-rat").html();
// //       var date = $("#rangenumber2").val();

// //       var result =
// //         (parseInt(valueChange) * parseFloat(interestRate) * parseInt(date)) /
// //         365;
// //       $(".show-loan-calculater-result-amount").fadeOut(200, function () {
// //         $(".show-loan-calculater-result-amount").html(valueChange);
// //         $(".show-loan-calculater-result-amount").number(true, 2);
// //         $(".show-loan-calculater-result-amount").fadeIn(200);
// //       });

// //       $(".show-loan-calculater-total-result").fadeOut(200, function () {
// //         $(".show-loan-calculater-total-result").html(result);
// //         $(".show-loan-calculater-total-result").number(true, 2);
// //         $(".show-loan-calculater-total-result").fadeIn(200);
// //       });
// //     });

// //     $("#range2").on("change", function () {
// //       var valueChange = this.value;
// //       var interestRate = $(".show-loan-calculater-result-interest-rat").html();
// //       var range = $("#rangenumber1").val();

// //       var result =
// //         (parseInt(range) * parseFloat(interestRate) * parseInt(valueChange)) /
// //         365;
// //       $(".show-loan-calculater-result-amount").fadeOut(200, function () {
// //         // $(".show-loan-calculater-result-amount").html(valueChange);
// //         $(".show-loan-calculater-result-amount").number(true, 2);
// //         $(".show-loan-calculater-result-amount").fadeIn(200);
// //       });

// //       $(".show-loan-calculater-total-result").fadeOut(200, function () {
// //         $(".show-loan-calculater-total-result").html(result);
// //         $(".show-loan-calculater-total-result").number(true, 2);
// //         $(".show-loan-calculater-total-result").fadeIn(200);
// //       });
// //     });

// //     $("#rangenumber2").on("change", function () {
// //       var valueChange = this.value;
// //       var interestRate = $(".show-loan-calculater-result-interest-rat").html();
// //       var range = $("#rangenumber1").val();

// //       var result =
// //         (parseInt(range) * parseFloat(interestRate) * parseInt(valueChange)) /
// //         365;
// //       $(".show-loan-calculater-result-amount").fadeOut(200, function () {
// //         // $(".show-loan-calculater-result-amount").html(valueChange);
// //         $(".show-loan-calculater-result-amount").number(true, 2);
// //         $(".show-loan-calculater-result-amount").fadeIn(200);
// //       });

// //       $(".show-loan-calculater-total-result").fadeOut(200, function () {
// //         $(".show-loan-calculater-total-result").html(result);
// //         $(".show-loan-calculater-total-result").number(true, 2);
// //         $(".show-loan-calculater-total-result").fadeIn(200);
// //       });
// //     });

// //     //service mobile app page
// //     $(".recommend-card").each(function (index) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".recommend-card.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".recommendom-mobile-app-img").fadeOut(200, function () {
// //           $(".recommendom-mobile-app-img").attr(
// //             "src",
// //             "../static/images/serviceMobileApp/" +
// //             "recom-mobile-app-" +
// //             (index + 1) +
// //             ".png"
// //           );
// //           $(".recommendom-mobile-app-img").fadeIn(200);
// //         });
// //       });
// //     });

// //     $(".step-recommend-dropdown-item").each(function (index) {
// //       $(this).click(function () {
// //         //var currentClick = $(this);
// //         //var currentActive = $(".recommend-card.active");
// //         //currentActive.removeClass("active");
// //         //currentClick.addClass("active");
// //         $(".recommendom-mobile-app-img").fadeOut(200, function () {
// //           $(".recommendom-mobile-app-img").attr(
// //             "src",
// //             "../static/images/serviceMobileApp/" +
// //             "recom-mobile-app-" +
// //             (index + 1) +
// //             ".png"
// //           );
// //           $(".recommendom-mobile-app-img").fadeIn(200);
// //         });
// //       });
// //     });

// //     $(".step-use-btn").each(function (i) {
// //       $(this).click(function () {
// //         var currentClick = $(this);
// //         var currentActive = $(".step-use-btn.active");
// //         currentActive.removeClass("active");
// //         currentClick.addClass("active");
// //         $(".carousel-step-use-display").each(function (y) {
// //           if (i == y) {
// //             var currentClick2 = $(this);
// //             var currentActive2 = $(".carousel-step-use-display.active");
// //             currentActive2.removeClass("active");
// //             currentClick2.addClass("active");
// //             currentClick2.fadeOut(200, function () {
// //               currentActive2.removeClass("active");
// //               currentClick2.addClass("active");
// //               currentClick2.fadeIn(200);
// //             });
// //           }
// //         });
// //       });
// //     });

// //     //$(".slider-for").slick({
// //     //    slidesToShow: 1,
// //     //    slidesToScroll: 1,
// //     //    arrows: false,
// //     //    //prevArrow: ".slick-arrow-custom-prev",
// //     //    //nextArrow: ".slick-arrow-custom-next",
// //     //    fade: true,
// //     //    //asNavFor: ".slider-nav",
// //     //});

// //     //$(".slider-nav").slick({
// //     //    slidesToShow: 2,
// //     //    slidesToScroll: 2,
// //     //    //asNavFor: ".slider-for",
// //     //    dots: false,
// //     //    centerMode: false,
// //     //    focusOnSelect: false,
// //     //    infinite: true,
// //     //    swipeToSlide: true
// //     //});

// //     $(".step-recommend-select").on("change", function () {
// //       var valueChange = this.value;
// //       $(".carousel-step-use-display").each(function (i) {
// //         if (valueChange - 1 == i) {
// //           var currentSelected = $(this);
// //           var currentActive = $(".carousel-step-use-display.active");
// //           currentActive.removeClass("active");
// //           currentSelected.addClass("active");
// //           currentSelected.fadeOut(200, function () {
// //             currentActive.removeClass("active");
// //             currentSelected.addClass("active");
// //             currentSelected.fadeIn(200);
// //           });
// //         }
// //       });
// //     });

// //     $(".carousel-promotion-page").slick({
// //       dots: true,
// //       infinite: true,
// //       speed: 800,
// //       slidesToShow: 1,
// //       adaptiveHeight: true,
// //       prevArrow: ".slick-arrow-custom-prev",
// //       nextArrow: ".slick-arrow-custom-next",
// //     });

// //     $(".navbar-toggler").click(function () {
// //       var icon = $(this).find(".fa-bars");
// //       console.log(icon);
// //       var elementSection = $(".register-btn i.fas");
// //       if (icon.length == 1) {
// //         console.log("1");
// //         elementSection.removeClass("fa-bars");
// //         elementSection.addClass("fa-times");
// //       } else {
// //         elementSection.removeClass("fa-times");
// //         elementSection.addClass("fa-bars");
// //         console.log("2");
// //       }
// //     });
// //   });
// // })(jQuery);

// // // cashcard
// // let numberOfElement;
// // // console.log(numberOfElement);
// // $("#list-benefit-btn-1").click(function () {
// //   numberOfElement = $("#list-benefit-btn-1").attr("name");
// //   console.log(numberOfElement);

// //   $("#list-benefit-btn-1").addClass("active");

// //   $("#list-benefit-btn-1").addClass("active");
// //   $("#list-benefit-btn-2").removeClass("active");
// //   $("#list-benefit-btn-3").removeClass("active");
// //   $("#list-benefit-btn-4").removeClass("active");
// //   $("#list-benefit-btn-5").removeClass("active");
// //   $("#list-benefit-btn-6").removeClass("active");
// // });
// // $("#list-benefit-btn-2").click(function () {
// //   $("#list-benefit-btn-1").removeClass("active");
// //   $("#list-benefit-btn-2").addClass("active");
// //   $("#list-benefit-btn-3").removeClass("active");
// //   $("#list-benefit-btn-4").removeClass("active");
// //   $("#list-benefit-btn-5").removeClass("active");
// //   $("#list-benefit-btn-6").removeClass("active");
// // });
// // $("#list-benefit-btn-3").click(function () {
// //   $("#list-benefit-btn-1").removeClass("active");
// //   $("#list-benefit-btn-2").removeClass("active");
// //   $("#list-benefit-btn-3").addClass("active");
// //   $("#list-benefit-btn-4").removeClass("active");
// //   $("#list-benefit-btn-5").removeClass("active");
// //   $("#list-benefit-btn-6").removeClass("active");
// // });
// // $("#list-benefit-btn-4").click(function () {
// //   $("#list-benefit-btn-1").removeClass("active");
// //   $("#list-benefit-btn-2").removeClass("active");
// //   $("#list-benefit-btn-3").removeClass("active");
// //   $("#list-benefit-btn-4").addClass("active");
// //   $("#list-benefit-btn-5").removeClass("active");
// //   $("#list-benefit-btn-6").removeClass("active");
// // });
// // $("#list-benefit-btn-5").click(function () {
// //   $("#list-benefit-btn-1").removeClass("active");
// //   $("#list-benefit-btn-2").removeClass("active");
// //   $("#list-benefit-btn-3").removeClass("active");
// //   $("#list-benefit-btn-4").removeClass("active");
// //   $("#list-benefit-btn-5").addClass("active");
// //   $("#list-benefit-btn-6").removeClass("active");
// // });
// // $("#list-benefit-btn-6").click(function () {
// //   $("#list-benefit-btn-1").removeClass("active");
// //   $("#list-benefit-btn-2").removeClass("active");
// //   $("#list-benefit-btn-3").removeClass("active");
// //   $("#list-benefit-btn-4").removeClass("active");
// //   $("#list-benefit-btn-5").removeClass("active");
// //   $("#list-benefit-btn-6").addClass("active");
// // });

// // // $("#flush-collapseOneX .accordion-body button").length
// // $(`#btn-step-cardless-1`).click(function () {
// //   $("#carousel-item-1").addClass(" active");
// //   $("#carousel-item-2").removeClass(" active");
// //   $("#carousel-item-3").removeClass(" active");

// //   $("#carousel-inner-1").addClass(" active");
// //   $("#carousel-inner-2").removeClass(" active");
// //   $("#carousel-inner-3").removeClass(" active");
// // });
// // $(`#btn-step-cardless-2`).click(function () {
// //   $("#carousel-item-1").removeClass(" active");
// //   $("#carousel-item-2").addClass(" active");
// //   $("#carousel-item-3").removeClass(" active");

// //   $("#carousel-inner-1").removeClass(" active");
// //   $("#carousel-inner-2").addClass(" active");
// //   $("#carousel-inner-3").removeClass(" active");
// // });
// // $(`#btn-step-cardless-3`).click(function () {
// //   $("#carousel-item-1").removeClass(" active");
// //   $("#carousel-item-2").removeClass(" active");
// //   $("#carousel-item-3").addClass(" active");

// //   $("#carousel-inner-1").removeClass(" active");
// //   $("#carousel-inner-2").removeClass(" active");
// //   $("#carousel-inner-3").addClass(" active");
// // });

// // // cardless
// // $(`#btn-atm-cardless-1`).click(function () {
// //   $("#carousel-atm-1").addClass(" active");
// //   $("#carousel-atm-2").removeClass(" active");
// //   $("#carousel-atm-3").removeClass(" active");

// //   $("#carousel-inner-4").addClass(" active");
// //   $("#carousel-inner-5").removeClass(" active");
// //   $("#carousel-inner-6").removeClass(" active");
// // });

// // $(`#btn-atm-cardless-2`).click(function () {
// //   $("#carousel-atm-1").removeClass(" active");
// //   $("#carousel-atm-2").addClass(" active");
// //   $("#carousel-atm-3").removeClass(" active");

// //   $("#carousel-inner-4").removeClass(" active");
// //   $("#carousel-inner-5").addClass(" active");
// //   $("#carousel-inner-6").removeClass(" active");
// // });

// // $(`#btn-atm-cardless-3`).click(function () {
// //   $("#carousel-atm-1").removeClass(" active");
// //   $("#carousel-atm-2").removeClass(" active");
// //   $("#carousel-atm-3").addClass(" active");

// //   $("#carousel-inner-4").removeClass(" active");
// //   $("#carousel-inner-5").removeClass(" active");
// //   $("#carousel-inner-6").addClass(" active");
// // });

// // // cardless mobile

// // $(`#btn-step-cardless-1-mobile`).click(function () {
// //   $("#carousel-item-1").addClass(" active");
// //   $("#carousel-item-2").removeClass(" active");
// //   $("#carousel-item-3").removeClass(" active");

// //   $("#carousel-inner-1").addClass(" active");
// //   $("#carousel-inner-2").removeClass(" active");
// //   $("#carousel-inner-3").removeClass(" active");
// // });
// // $(`#btn-step-cardless-2-mobile`).click(function () {
// //   $("#carousel-item-1").removeClass(" active");
// //   $("#carousel-item-2").addClass(" active");
// //   $("#carousel-item-3").removeClass(" active");

// //   $("#carousel-inner-1").removeClass(" active");
// //   $("#carousel-inner-2").addClass(" active");
// //   $("#carousel-inner-3").removeClass(" active");
// // });
// // $(`#btn-step-cardless-3-mobile`).click(function () {
// //   $("#carousel-item-1").removeClass(" active");
// //   $("#carousel-item-2").removeClass(" active");
// //   $("#carousel-item-3").addClass(" active");

// //   $("#carousel-inner-1").removeClass(" active");
// //   $("#carousel-inner-2").removeClass(" active");
// //   $("#carousel-inner-3").addClass(" active");
// // });

// // $(`#btn-atm-cardless-1-mobile`).click(function () {
// //   $("#carousel-atm-1").addClass(" active");
// //   $("#carousel-atm-2").removeClass(" active");
// //   $("#carousel-atm-3").removeClass(" active");

// //   $("#carousel-inner-4").addClass(" active");
// //   $("#carousel-inner-5").removeClass(" active");
// //   $("#carousel-inner-6").removeClass(" active");
// // });

// // $(`#btn-atm-cardless-2-mobile`).click(function () {
// //   $("#carousel-atm-1").removeClass(" active");
// //   $("#carousel-atm-2").addClass(" active");
// //   $("#carousel-atm-3").removeClass(" active");

// //   $("#carousel-inner-4").removeClass(" active");
// //   $("#carousel-inner-5").addClass(" active");
// //   $("#carousel-inner-6").removeClass(" active");
// // });

// // $(`#btn-atm-cardless-3-mobile`).click(function () {
// //   $("#carousel-atm-1").removeClass(" active");
// //   $("#carousel-atm-2").removeClass(" active");
// //   $("#carousel-atm-3").addClass(" active");

// //   $("#carousel-inner-4").removeClass(" active");
// //   $("#carousel-inner-5").removeClass(" active");
// //   $("#carousel-inner-6").addClass(" active");
// // });

// // // estatement

// // var innerEstatement1 = false;
// // var innerEstatement2 = false;
// // $(".carousel-inner-1").show();
// // $(".carousel-inner-2").hide();

// // $(`#handleBtnEstatement2`).on("click", () => {
// //   innerEstatement1 = false;
// //   innerEstatement2 = true;

// //   if (innerEstatement2 == true) {
// //     console.log("test");
// //     $(".carousel-inner-1").show();
// //     $(".carousel-inner-2").hide();
// //   }
// // });

// // // $(`#handleBtn02`).on("click", () => {
// // //   estatement1 = false;
// // //   estatement2 = true;
// // //   if (estatement2 == true) {
// // //     console.log("test02");
// // //     $(".carousel-estatement-inner-1").hide();
// // //     $(".carousel-estatement-inner-2").show();
// // //   }
// // // });

// // // $(`#handleBtn1`).on("click", () => {
// // //   innter1 = true;
// // //   innter2 = false;

// // //   if (innter1 == true) {
// // //     console.log("test");
// // //     $(".carousel-inner-1").show();
// // //     $(".carousel-inner-2").hide();
// // //   }
// // // });

// // // $(`#handleBtn2`).on("click", () => {
// // //   innter1 = false;
// // //   innter2 = true;
// // //   if (innter2 == true) {
// // //     $(".carousel-inner-1").hide();
// // //     $(".carousel-inner-2").show();
// // //   }
// // // });

// // $(`#btn-estatement-application-1-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-mobile").addClass("active");
// //   $("#carousel-estatement-item-2-mobile").removeClass("active");
// //   $("#carousel-estatement-item-3-mobile").removeClass("active");

// //   $("#carousel-estatement-inner-1-mobile").addClass("active");
// //   $("#carousel-estatement-inner-2-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-3-mobile").removeClass("active");
// // });

// // $(`#btn-estatement-application-2-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-mobile").removeClass("active");
// //   $("#carousel-estatement-item-2-mobile").addClass("active");
// //   $("#carousel-estatement-item-3-mobile").removeClass("active");

// //   $("#carousel-estatement-inner-1-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-2-mobile").addClass("active");
// //   $("#carousel-estatement-inner-3-mobile").removeClass("active");
// // });

// // $(`#btn-estatement-application-3-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-mobile").removeClass("active");
// //   $("#carousel-estatement-item-2-mobile").removeClass("active");
// //   $("#carousel-estatement-item-3-mobile").addClass("active");

// //   $("#carousel-estatement-inner-1-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-2-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-3-mobile").addClass("active");
// // });

// // $(`#btn-estatement-line-1-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-line-mobile").addClass("active");
// //   $("#carousel-estatement-item-2-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-3-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-4-line-mobile").removeClass("active");

// //   $("#carousel-estatement-inner-4-mobile").addClass("active");
// //   $("#carousel-estatement-inner-5-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-6-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-7-mobile").removeClass("active");
// // });

// // $(`#btn-estatement-line-2-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-2-line-mobile").addClass("active");
// //   $("#carousel-estatement-item-3-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-4-line-mobile").removeClass("active");

// //   $("#carousel-estatement-inner-4-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-5-mobile").addClass("active");
// //   $("#carousel-estatement-inner-6-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-7-mobile").removeClass("active");
// // });

// // $(`#btn-estatement-line-3-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-2-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-3-line-mobile").addClass("active");
// //   $("#carousel-estatement-item-4-line-mobile").removeClass("active");

// //   $("#carousel-estatement-inner-4-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-5-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-6-mobile").addClass("active");
// //   $("#carousel-estatement-inner-7-mobile").removeClass("active");
// // });
// // $(`#btn-estatement-line-4-mobile`).click(function () {
// //   $("#carousel-estatement-item-1-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-2-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-3-line-mobile").removeClass("active");
// //   $("#carousel-estatement-item-4-line-mobile").addClass("active");

// //   $("#carousel-estatement-inner-4-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-5-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-6-mobile").removeClass("active");
// //   $("#carousel-estatement-inner-7-mobile").addClass("active");
// // });

// // $(`#btn-estatement-application-1`).click(function () {
// //   $("#carousel-estatement-item-1").addClass("active");
// //   $("#carousel-estatement-item-2").removeClass("active");
// //   $("#carousel-estatement-item-3").removeClass("active");

// //   $("#carousel-estatement-inner-1").addClass("active");
// //   $("#carousel-estatement-inner-2").removeClass("active");
// //   $("#carousel-estatement-inner-3").removeClass("active");
// // });
// // $(`#btn-estatement-application-2`).click(function () {
// //   $("#carousel-estatement-item-1").removeClass("active");
// //   $("#carousel-estatement-item-2").addClass("active");
// //   $("#carousel-estatement-item-3").removeClass("active");

// //   $("#carousel-estatement-inner-1").removeClass("active");
// //   $("#carousel-estatement-inner-2").addClass("active");
// //   $("#carousel-estatement-inner-3").removeClass("active");
// // });
// // $(`#btn-estatement-application-3`).click(function () {
// //   $("#carousel-estatement-item-1").removeClass("active");
// //   $("#carousel-estatement-item-2").removeClass("active");
// //   $("#carousel-estatement-item-3").addClass("active");

// //   $("#carousel-estatement-inner-1").removeClass("active");
// //   $("#carousel-estatement-inner-2").removeClass("active");
// //   $("#carousel-estatement-inner-3").addClass("active");
// // });

// // $(`#btn-estatement-lineConnect-1`).click(function () {
// //   $("#carousel-estatement-item-4").addClass("active");
// //   $("#carousel-estatement-item-5").removeClass("active");
// //   $("#carousel-estatement-item-6").removeClass("active");
// //   $("#carousel-estatement-item-7").removeClass("active");

// //   $("#carousel-estatement-inner-4").addClass("active");
// //   $("#carousel-estatement-inner-5").removeClass("active");
// //   $("#carousel-estatement-inner-6").removeClass("active");
// //   $("#carousel-estatement-inner-7").removeClass("active");
// // });

// // $(`#btn-estatement-lineConnect-2`).click(function () {
// //   $("#carousel-estatement-item-4").removeClass("active");
// //   $("#carousel-estatement-item-5").addClass("active");
// //   $("#carousel-estatement-item-6").removeClass("active");
// //   $("#carousel-estatement-item-7").removeClass("active");

// //   $("#carousel-estatement-inner-4").removeClass("active");
// //   $("#carousel-estatement-inner-5").addClass("active");
// //   $("#carousel-estatement-inner-6").removeClass("active");
// //   $("#carousel-estatement-inner-7").removeClass("active");
// // });

// // $(`#btn-estatement-lineConnect-3`).click(function () {
// //   $("#carousel-estatement-item-4").removeClass("active");
// //   $("#carousel-estatement-item-5").removeClass("active");
// //   $("#carousel-estatement-item-6").addClass("active");
// //   $("#carousel-estatement-item-7").removeClass("active");

// //   $("#carousel-estatement-inner-4").removeClass("active");
// //   $("#carousel-estatement-inner-5").removeClass("active");
// //   $("#carousel-estatement-inner-6").addClass("active");
// //   $("#carousel-estatement-inner-7").removeClass("active");
// // });

// // $(`#btn-estatement-lineConnect-4`).click(function () {
// //   $("#carousel-estatement-item-4").removeClass("active");
// //   $("#carousel-estatement-item-5").removeClass("active");
// //   $("#carousel-estatement-item-6").removeClass("active");
// //   $("#carousel-estatement-item-7").addClass("active");

// //   $("#carousel-estatement-inner-4").removeClass("active");
// //   $("#carousel-estatement-inner-5").removeClass("active");
// //   $("#carousel-estatement-inner-6").removeClass("active");
// //   $("#carousel-estatement-inner-7").addClass("active");
// // });

// // $("#scrollToTop").click(function () {
// //   goToTop();
// // });

// // function goToTop() {
// //   window.scrollTo(0, 0);
// // }

// // // $("#step4paymentType1").on("click", () => {
// // //   $("#step5termOfConditionBank1").click();
// // // });
// // // $("#step4paymentType2").on("click", () => {
// // //   $("#step5termOfConditionBank2").click();
// // // });

// // function getParam(p) {
// //   var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
// //   return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
// // }

// // function getExpiryRecord(value) {
// //     var expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds

// //     var expiryDate = new Date().getTime() + expiryPeriod;
// //     return {
// //         value: value,
// //         expiryDate: expiryDate
// //     };
// // }

// // function addGclid() {
// //     var gclidParam = getParam('gclid');
// //     var gclidFormFields = ['gclid']; // all possible gclid form field ids here
// //     var gclidRecord = null;
// //     var currGclidFormField;
// //     var gclsrcParam = getParam('gclsrc');
// //     var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

// //     gclidFormFields.forEach(function (field) {
// //         if (document.getElementById(field)) {
// //             currGclidFormField = document.getElementById(field);
// //         }
// //     });

// //     if (gclidParam && isGclsrcValid) {
// //         gclidRecord = getExpiryRecord(gclidParam);
// //         localStorage.setItem('gclid', JSON.stringify(gclidRecord));
// //     }

// //     var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
// //     var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

// //     if (currGclidFormField && isGclidValid) {
// //         currGclidFormField.value = gclid.value;
// //     }
// // }
// // window.addEventListener('load', addGclid);
