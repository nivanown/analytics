/*- b-analytics-tabs -*/
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.b-analytics-tabs__nav li');
    const contents = document.querySelectorAll('.b-analytics-tabs__item');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            contents[index].classList.add('active');
        });
    });
});

/*- date-range -*/
document.querySelectorAll('.date-range-field').forEach((field) => {
    const input     = field.querySelector('.date-range');
    const deleteBtn = field.querySelector('.date-range-field__delete');

    const picker = new AirDatepicker(input, {
        range: true,
        multipleDatesSeparator: ' — ',
        autoClose: true,
        dateFormat: 'dd.MM.yyyy',
        onSelect({ formattedDate }) {
            toggleDeleteButton();
        },
        locale: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.MM.yyyy',
            firstDay: 1
        }
    });

    deleteBtn.addEventListener('click', () => {
        input.value = '';
        picker.clear();
        toggleDeleteButton();
    });

    input.addEventListener('input', toggleDeleteButton);

    // Проверка сразу при загрузке
    toggleDeleteButton();

    function toggleDeleteButton() {
        const hasDigits = /\d/.test(input.value); // Проверка на наличие цифр
        deleteBtn.style.display = hasDigits ? 'block' : 'none';
    }
});

/*- chart-1 -*/
document.addEventListener("DOMContentLoaded", function () {
    const chartEl = document.querySelector("#chart-1");

    if (chartEl) {
        const options = {
            chart: {
                type: 'line',
                height: 83,
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            series: [{
                data: [10, 20, 15, 90, 30, 28, 35, 90, 40, 38, 45, 90]
            }],
            stroke: {
                width: 2,
                colors: ['#FECACA'], // красная линия
                curve: 'straight'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: '#737373',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                    }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: {
                show: false
            },
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                show: false
            }
        };

        const chart = new ApexCharts(chartEl, options);
        chart.render();
    }
});

/*- chart-2 -*/
document.addEventListener("DOMContentLoaded", function () {
    const chartEl2 = document.querySelector("#chart-2");

    if (chartEl2) {
        const options2 = {
            chart: {
                type: 'line',
                height: 83,
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            series: [{
                data: [5, 15, 10, 20, 18, 25, 22, 30, 28, 35, 32, 40]
            }],
            stroke: {
                width: 2,
                colors: ['#BBF7D0'],
                curve: 'straight'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: '#737373',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                    }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: { 
                show: false 
            },
            grid: { 
                show: false 
            },
            dataLabels: { 
                enabled: false 
            },
            tooltip: { 
                enabled: false 
            },
            legend: { 
                show: false 
            }
        };

        const chart2 = new ApexCharts(chartEl2, options2);
        chart2.render();
    }
});

/*- chart-3 -*/
document.addEventListener("DOMContentLoaded", function () {
    const chartEl3 = document.querySelector("#chart-3");

    if (chartEl3) {
        const dates3 = [
            '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', '2025-05-01',
            '2025-06-01', '2025-07-01', '2025-08-01', '2025-09-01', '2025-10-01',
            '2025-11-01', '2025-12-01'
        ];

        const options3 = {
            chart: {
                type: 'area',
                height: 284,
                toolbar: { show: false },
                zoom: { enabled: false },
                fontFamily: 'Inter, sans-serif'
            },
            series: [{
                name: 'Percentage',
                data: [0, 2, 3, 5, 6, 4.5, 6.8, 7.2, 6.5, 7.7, 7.9, 8]
            }],
            stroke: {
                curve: 'straight',
                width: 2,
                colors: ['#1D4ED8']
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.6,
                    opacityTo: 0,
                    colorStops: [
                        { offset: 0, color: '#60A5FA', opacity: 1 },
                        { offset: 100, color: '#60A5FA', opacity: 1 }
                    ]
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: '#737373',
                        fontSize: '12px'
                    }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: {
                tickAmount: 4,
                min: 0,
                max: 8,
                labels: {
                    formatter: val => `${val.toFixed(0)}%`,
                    style: {
                        colors: '#737373',
                        fontSize: '12px'
                    }
                }
            },
            grid: {
                borderColor: '#e0e0e0',
                strokeDashArray: 4
            },
            dataLabels: { enabled: false },
            tooltip: {
                enabled: true,
                intersect: false,
                custom: function({ series, seriesIndex, dataPointIndex }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const rawDate = new Date(dates3[dataPointIndex]);
                    const day = rawDate.getDate();
                    const month = rawDate.toLocaleString('en-US', { month: 'short' });
                    const year = rawDate.getFullYear();

                    return `
                        <div style="padding: 6px 10px; background: white; border: 1px solid #E5E5E5; border-radius: 6px; font-family: Inter, sans-serif; font-size: 12px; color: #111827;">
                            <div style="font-weight: 600;">${value}%</div>
                            <div style="color: #6b7280;">${day} ${month} ${year}</div>
                        </div>
                    `;
                }
            },
            legend: { show: false }
        };

        const chart3 = new ApexCharts(chartEl3, options3);
        chart3.render();
    }
});

/*- chart-4 -*/
document.addEventListener("DOMContentLoaded", function () {
    const chartEl4 = document.querySelector("#chart-4");

    if (chartEl4) {
        const dates = [
            '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', '2025-05-01',
            '2025-06-01', '2025-07-01', '2025-08-01', '2025-09-01', '2025-10-01',
            '2025-11-01', '2025-12-01'
        ];

        const options4 = {
            chart: {
                type: 'area',
                height: 284,
                toolbar: { show: false },
                zoom: { enabled: false },
                fontFamily: 'Inter, sans-serif'
            },
            series: [{
                name: 'Data',
                data: [0, 200, 300, 400, 500, 350, 420, 390, 410, 450, 480, 500]
            }],
            stroke: {
                curve: 'straight',
                width: 2,
                colors: ['#EAB30899']
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.6,
                    opacityTo: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#EAB30899',
                            opacity: 0.6
                        },
                        {
                            offset: 100,
                            color: '#EAB30899',
                            opacity: 0
                        }
                    ]
                }
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: '#737373',
                        fontSize: '12px'
                    }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: 500,
                labels: {
                    style: {
                        colors: '#737373',
                        fontSize: '12px'
                    }
                }
            },
            grid: {
                borderColor: '#e0e0e0',
                strokeDashArray: 4
            },
            dataLabels: { enabled: false },
            tooltip: {
                enabled: true,
                custom: function({ series, seriesIndex, dataPointIndex }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const rawDate = new Date(dates[dataPointIndex]);
                    const day = rawDate.getDate();
                    const month = rawDate.toLocaleString('en-US', { month: 'short' });
                    const year = rawDate.getFullYear();

                    return `
                        <div style="padding: 6px 10px; background: white; border: 1px solid #E5E5E5; border-radius: 6px; font-family: Inter, sans-serif; font-size: 12px; color: #111827;">
                            <div style="font-weight: 600;">$${value}</div>
                            <div style="color: #6b7280;">${day} ${month} ${year}</div>
                        </div>
                    `;
                }
            },
            legend: { show: false }
        };

        const chart4 = new ApexCharts(chartEl4, options4);
        chart4.render();
    }
});

/*- chart-5 -*/
document.addEventListener("DOMContentLoaded", function () {
  const chartEl5 = document.querySelector("#chart-5");

  if (chartEl5) {
    const weekDaysShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const weekDaysFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

    const options5 = {
      chart: {
        type: 'radar',
        height: 360,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      series: [
        {
          name: 'Серия 1',
          data: [30, 40, 35, 50, 49, 60, 70]
        },
        {
          name: 'Серия 2',
          data: [20, 30, 25, 40, 45, 50, 60]
        }
      ],
      labels: weekDaysShort,
      stroke: {
        width: 2,
        colors: ['#F97316', '#22C55E']
      },
      fill: {
        opacity: 0.2,
        colors: ['#F97316', '#22C55E']
      },
      markers: {
        size: 3,
        colors: ['transparent'],
        strokeColors: 'transparent',
        hover: {
          size: 6
        }
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex }) {
          const day = weekDaysFull[dataPointIndex];
          const value = series[seriesIndex][dataPointIndex];
          const clicks = value;
          const orders = Math.round(value * 0.066);

          return `
            <div style="padding: 8px 10px; background: white; border: 1px solid #E5E7EB; border-radius: 6px; font-family: Inter, sans-serif; font-size: 12px; color: #111827;">
              <div style="font-weight: 600;">${day}</div>
              <div style="margin-top: 4px; color: #6b7280;">
                ${clicks} кликов<br>${orders} заказов
              </div>
            </div>
          `;
        }
      },
      yaxis: {
        show: false
      },
      legend: {
        show: false
      }
    };

    const chart5 = new ApexCharts(chartEl5, options5);
    chart5.render();
  }
});

/*- chart-6 -*/
document.addEventListener("DOMContentLoaded", function () {
  const chartEl6 = document.querySelector("#chart-6");

  if (chartEl6) {
    const categoryLabels = ['К1', 'К2', 'К3', 'К4', 'К5', 'К6'];

    const options6 = {
      chart: {
        type: 'radar',
        height: 360,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      series: [
        {
          name: 'Клики',
          data: [30, 40, 35, 50, 49, 60, 70]
        },
        {
          name: 'Просмотры',
          data: [20, 30, 25, 40, 45, 50, 60]
        }
      ],
      labels: categoryLabels,
      stroke: {
        width: 2,
        colors: ['#F97316', '#1D4ED8']
      },
      fill: {
        opacity: 0.2,
        colors: ['#F97316', '#1D4ED8']
      },
      markers: {
        size: 3,
        colors: ['transparent'],
        strokeColors: 'transparent',
        hover: {
          size: 6
        }
      },
      tooltip: {
        enabled: true,
        custom: function({ series, seriesIndex, dataPointIndex }) {
          const category = categoryLabels[dataPointIndex];
          const clicks = series[0][dataPointIndex];
          const views = series[1][dataPointIndex];

          return `
            <div style="padding: 8px 10px; background: white; border: 1px solid #E5E7EB; border-radius: 6px; font-family: Inter, sans-serif; font-size: 12px; color: #111827;">
              <div style="font-weight: 600;">${category}</div>
              <div style="margin-top: 4px; color: #6b7280;">
                ${clicks} кликов<br>${views} просмотров
              </div>
            </div>
          `;
        }
      },
      yaxis: {
        show: false
      },
      legend: {
        show: false
      }
    };

    const chart6 = new ApexCharts(chartEl6, options6);
    chart6.render();
  }
});

/*- chart-7 -*/
document.addEventListener("DOMContentLoaded", function () {
  const chartEl7 = document.querySelector("#chart-7");

  if (chartEl7) {
    const dates7 = [
      '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', '2025-05-01',
      '2025-06-01', '2025-07-01', '2025-08-01', '2025-09-01', '2025-10-01',
      '2025-11-01', '2025-12-01'
    ];

    const options7 = {
      chart: {
        type: 'area',
        height: 344,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: 'Inter, sans-serif'
      },
      series: [{
        name: 'Доход',
        data: [10000, 28000, 14000, 20500, 13000, 12500, 15000, 17500, 20000, 22500, 25000, 30000]
      }],
      stroke: {
        curve: 'straight',
        width: 2,
        colors: ['#22C55E']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          colorStops: [
            {
              offset: 0,
              color: '#22C55E',
              opacity: 0.4
            },
            {
              offset: 100,
              color: '#22C55E',
              opacity: 0
            }
          ]
        }
      },
      xaxis: {
        categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                     'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        labels: {
          style: {
            colors: '#737373',
            fontSize: '12px'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        tickAmount: 5,
        min: 1000,
        max: 30000,
        labels: {
          style: {
            colors: '#737373',
            fontSize: '12px'
          },
          formatter: function (value) {
            return (value / 1000) + 'k';
          }
        }
      },
      grid: {
        borderColor: '#e0e0e0',
        strokeDashArray: 4
      },
      dataLabels: { enabled: false },
      tooltip: {
        enabled: true,
        custom: function({ series, seriesIndex, dataPointIndex }) {
          const value = series[seriesIndex][dataPointIndex];
          const rawDate = new Date(dates7[dataPointIndex]);
          const day = rawDate.getDate();
          const month = rawDate.toLocaleString('ru-RU', { month: 'short' });
          const year = rawDate.getFullYear();

          return `
            <div style="padding: 6px 10px; background: white; border: 1px solid #E5E5E5; border-radius: 6px; font-family: Inter, sans-serif; font-size: 12px; color: #111827;">
              <div style="font-weight: 600;">$${value.toFixed(2)}</div>
              <div style="color: #6b7280;">${day} ${month} ${year}</div>
            </div>
          `;
        }
      },
      legend: { show: false }
    };

    const chart7 = new ApexCharts(chartEl7, options7);
    chart7.render();
  }
});

/*- chart-8 -*/
document.addEventListener("DOMContentLoaded", function () {
  const chartEl8 = document.querySelector("#chart-8");

  if (chartEl8) {
    const options8 = {
      chart: {
        type: 'line',
        height: 83,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: [{
        data: [10, 90, 30, 40, 38, 45, 90]
      }],
      stroke: {
        width: 2,
        colors: ['#E5E5E5'],
        curve: 'straight'
      },
      xaxis: {
        categories: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: '#737373',
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      legend: {
        show: false
      }
    };

    const chart8 = new ApexCharts(chartEl8, options8);
    chart8.render();
  }
});

/*- chart-9 -*/
document.addEventListener("DOMContentLoaded", function () {
  const chartEl9 = document.querySelector("#chart-9");

  if (chartEl9) {
    const dates9 = [
      '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', '2025-05-01',
      '2025-06-01', '2025-07-01', '2025-08-01', '2025-09-01', '2025-10-01',
      '2025-11-01', '2025-12-01'
    ];

    const options9 = {
      chart: {
        type: 'area',
        height: 368,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: 'Inter, sans-serif'
      },
      series: [{
        name: 'Percentage',
        data: [0, 2, 3, 5, 6, 4.5, 6.8, 7.2, 6.5, 7.7, 7.9, 8]
      }],
      stroke: {
        curve: 'straight',
        width: 2,
        colors: ['#84CC16']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0,
          colorStops: [
            {
              offset: 0,
              color: '#84CC16',
              opacity: 0.4
            },
            {
              offset: 100,
              color: '#84CC16',
              opacity: 0
            }
          ]
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: '#737373',
            fontSize: '12px'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 8,
        labels: {
          formatter: val => `${val.toFixed(0)}%`,
          style: {
            colors: '#737373',
            fontSize: '12px'
          }
        }
      },
      grid: {
        borderColor: '#e0e0e0',
        strokeDashArray: 4
      },
      dataLabels: { enabled: false },
      tooltip: {
        enabled: true,
        intersect: false,
        custom: function({ series, seriesIndex, dataPointIndex }) {
          const value = series[seriesIndex][dataPointIndex];
          const rawDate = new Date(dates9[dataPointIndex]);
          const day = rawDate.getDate();
          const month = rawDate.toLocaleString('en-US', { month: 'short' });
          const year = rawDate.getFullYear();

          return `
            <div style="padding: 6px 10px; background: white; border: 1px solid #E5E5E5; border-radius: 6px; font-family: Inter, sans-serif; font-size: 12px; color: #111827;">
              <div style="font-weight: 600;">${value}%</div>
              <div style="color: #6b7280;">${day} ${month} ${year}</div>
            </div>
          `;
        }
      },
      legend: { show: false }
    };

    const chart9 = new ApexCharts(chartEl9, options9);
    chart9.render();
  }
});

/*- b-orders-line -*/
document.addEventListener('DOMContentLoaded', function () {
    const quantities = Array.from(document.querySelectorAll('.b-orders-info-panel__quantity'))

        .map(el => parseInt(el.textContent.trim(), 10));

    const lineItems = document.querySelectorAll('.b-orders-line__item');

    if (quantities.length !== lineItems.length || quantities.length === 0) {
        return;
    }

    const total = quantities.reduce((sum, val) => sum + val, 0);

    quantities.forEach((value, index) => {
        const percent = (value / total) * 100;
        lineItems[index].style.width = `${percent.toFixed(2)}%`;
    });
});