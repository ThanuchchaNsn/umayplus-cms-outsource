(function ($) {
  $(document).on('ready', function () {

    $('.btn-apply-filter').on('',function(){

    });
    
    // Age

    const dataChartOptionsAge = {
      type: 'bar',
      data: {
        labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
        datasets: [
          {
            label: 'Traffic',
            data: [2000, 2500, 2200, 3000, 3600, 2000],
            backgroundColor: ['#003F67','#00B4F1','#003F67','#00B4F1','#003F67','#00B4F1'],
            borderColor: ['#003F67','#00B4F1','#003F67','#00B4F1','#003F67','#00B4F1'],
            borderWidth: 1,
            barPercentage: 0.5,
          },
        ],
      },
    };

    // Options
    const optionsChartOptionsAge = {
      dataLabelsPlugin: true,
      options: {
        scales: {
          x:
            {
              ticks: {
                color: '#626262',
              },
            },
          y:
            {
              ticks: {
                color: '#626262',
              },
            },
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = dataChartOptionsAge.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(0) + '%';
              return percentage;
            },
            color: '#4f4f4f',
            labels: {
              title: {
                font: {
                  size: '20',
                  family: 'DB Ozone X',
                  style: ''
                },
                anchor: 'end',
                align: 'top'
              }
            },
          },
        }
      },
    };

    new mdb.Chart(
      document.getElementById('AgeChart'),
      dataChartOptionsAge,
      optionsChartOptionsAge
    );


    //Gender
    const dataChartDataLabelsGender = {
      type: 'pie',
      data: {
        labels: ["Female", "Male"],
        datasets: [
          {
            label: 'Traffic',
            data: [680, 490],
            backgroundColor: ["#00B4F1", "#003F67"]
          },
        ],
      },
    };

    // Options
    const optionsChartDataLabelsGender = {
      dataLabelsPlugin: true,
      options: {
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 12, // Set the desired font size here
              },
            },
          },
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              // Assign the data to the variable and format it according to your needs
              let dataArr = dataChartDataLabelsGender.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + '%';
              return percentage;
            },
            color: 'white',
            labels: {
              title: {
                font: {
                  size: '14',
                },
              },
            },
          },
        },
      },
    };

    new mdb.Chart(
      document.getElementById('GenderChart'),
      dataChartDataLabelsGender,
      optionsChartDataLabelsGender
    );


    // User by Devices
    const dataChartFunnelUsersByDevices = {
      type: 'bar',
      data: {
        labels: ["Tablet", "Desktop", "Mobile"],
        datasets: [
          {
            data: [1133, 3289, 4026],
            backgroundColor: ["#E31C79", "#00B4F1","#003F67"],
            barPercentage: 1,
          },
        ],
      },
    };

    // Options
    const optionsChartFunnelUsersByDevices = {
      dataLabelsPlugin: true,
      options: {
        indexAxis: 'y',
        scales: {
          x:
            {
              grid: {
                offsetGridLines: true,
              },
            },
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = dataChartFunnelUsersByDevices.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + '%';
              return percentage;
            },
            color: '#4f4f4f',
            labels: {
              title: {
                font: {
                  size: '13',
                },
                anchor: 'end',
                align: 'right'
              },
            },
          },
        },
      },
    };

    new mdb.Chart(
      document.getElementById('UsersByDevicesChart'),
      dataChartFunnelUsersByDevices,
      optionsChartFunnelUsersByDevices
    );



  // Operating System Chart
    const dataChartDataLabelsOperatingSystem = {
      type: 'pie',
      data: {
        labels: ["IOS","Android","Windows","Other"],
        datasets: [
          {
            label: 'Traffic',
            data: [480, 490,130,110],
            backgroundColor: ["#00B4F1", "#003F67","#E31C79","#A2AAAD"]
          },
        ],
      },
    };

    // Options
    const optionsChartDataLabelsOperatingSystem = {
      dataLabelsPlugin: true,
      options: {
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 12, // Set the desired font size here
              },
            },
          },
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              // Assign the data to the variable and format it according to your needs
              let dataArr = dataChartDataLabelsOperatingSystem.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + '%';
              return percentage;
            },
            color: 'white',
            labels: {
              title: {
                font: {
                  size: '14',
                },
              },
            },
          },
        },
      },
    };

    new mdb.Chart(
      document.getElementById('OperatingSystemChart'),
      dataChartDataLabelsOperatingSystem,
      optionsChartDataLabelsOperatingSystem
    );


  });
})(jQuery);