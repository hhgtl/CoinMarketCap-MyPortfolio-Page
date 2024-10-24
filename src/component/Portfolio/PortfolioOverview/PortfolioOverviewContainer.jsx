import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PortfolioOverview from './PortfolioOverview';
import { useDispatch, useSelector } from 'react-redux';
import { setPieData } from '../../../redux/portfolioSlice';

const PortfolioOverviewContainer = () => {
  const portfolioAssets = useSelector((state) => state.portfolioData.portfolio);
  const dispatch = useDispatch();
  let selectedPortfolio;
  portfolioAssets.forEach((p) => {
    if (p.selectedPortfolio) {
      selectedPortfolio = { ...p };
    }
  });
  const dataTest = [
    ['2024-09-13 00:00', 45400], // Дата та значення для графіка
    ['2024-09-13 01:00', 47000],
    ['2024-09-13 02:00', 46500],
    ['2024-09-13 03:00', 49900],
    ['2024-09-13 04:00', 49000],
  ];
  const dateList = dataTest.map(function (item) {
    return item[0]; // Масив дат
  });
  const valueList = dataTest.map(function (item) {
    return item[1]; // Масив значень
  });

  const historyLineChart = {
    animation: false,
    xAxis: {
      type: 'category', // Тип осі X — категорійний
      data: dateList, // Дані для осі X
      boundaryGap: false, // Лінія графіку не буде мати відступу від країв осі
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ccc', // Колір лінії осі X
        },
      },
      axisTick: {
        show: false, // Сховати короткі риски на осі X
      },
      axisLabel: {
        show: true,
        color: '#999', // Колір підписів осі X
      },
      splitLine: {
        show: false, // Сховати роздільні лінії на осі X
      },
    },
    yAxis: {
      type: 'value', // Тип осі Y — числовий
      position: 'right', // Розташування осі Y праворуч
      // min: 45400, // Мінімальне значення осі Y
      // max: 49900, // Максимальне значення осі Y
      // interval: 750, // Інтервал між мітками на осі Y
      boundaryGap: ['5%', '5%'],
      scale: true,
      axisLine: {
        show: false, // Сховати лінію осі Y
      },
      axisTick: {
        show: false, // Сховати короткі риски на осі Y
      },
      axisLabel: {
        show: true,
        color: '#999', // Колір підписів осі Y
        formatter: function (value) {
          return '$' + value;
        },
      },
      splitLine: {
        show: true, // Показати роздільні лінії на осі Y
        lineStyle: {
          color: '#eee', // Колір роздільних ліній на осі Y
        },
      },
    },
    grid: {
      left: '0%', // Відступ сітки зліва
      right: '1%', // Відступ сітки справа
      top: '10%', // Відступ сітки зверху
      bottom: '1%', // Відступ сітки знизу
      containLabel: true, // Мітки залишаються всередині сітки
    },
    tooltip: {
      trigger: 'axis', // Підказка з'являється при наведенні на вісь
      axisPointer: {
        type: 'cross', // Вказівник у вигляді перехрестя
        label: {
          backgroundColor: '#6a7985', // Колір фону підказки
        },
        crossStyle: {
          color: '#999', // Колір перехрестя вказівника
        },
      },
      formatter: function (params) {
        // Форматування вмісту підказки
        const date = new Date(params[0].axisValue); // Отримання дати
        return `
          <b>${date.toDateString()}</b> ${date.toTimeString().slice(0, 5)} UTC+3<br/>
          <span style="color: ${params[0].color}; font-weight: bold;">●</span> 
          Value: $${params[0].data.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })} 
        `;
      },
      backgroundColor: '#fff', // Білий фон підказки
      borderColor: '#ccc', // Сірий колір межі підказки
      borderWidth: 1, // Ширина межі підказки
      textStyle: {
        color: '#333', // Колір тексту підказки
      },
    },
    series: [
      {
        type: 'line', // Тип лінійного графіка
        symbol: 'none', // Не показувати символи
        lineStyle: {
          width: 2, // Товщина лінії
          color: '#16C784', // Зелений колір лінії
        },
        showSymbol: false, // Вимкнути показ символів
        data: valueList, // Дані для серії
        color: '#16C784', // Колір заливки
        areaStyle: {
          color: 'rgba(0, 180, 90, 0.05)', // Прозора зелена заливка
        },
      },
      {
        data: valueList, // Дані для серії
        type: 'line', // Тип лінійного графіка
        smooth: false, // Лінія не буде згладженою
        lineStyle: {
          color: '#16C784', // Зелений колір лінії // #EA3943 Червоний
        },
        areaStyle: {
          color: {
            type: 'linear', // Лінійний градієнт
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(22, 199, 132, 0.8)', // Яскраво-зелений вгорі
              },
              {
                offset: 1,
                color: 'rgba(22, 199, 132, 0)', // Прозорий зелений внизу
              },
            ],
            global: false, // Локальний градієнт
          },
        },
        symbol: 'none', // Не показувати символи
      },
    ],
  };
  useEffect(() => {
    selectedPortfolio.coin.forEach((coin) => {
      let value =
        ((coin.quantity * selectedPortfolio.сurrentPriceOfCoins[coin.id].usd) /
          selectedPortfolio.totalBalance) *
        100;
      dispatch(() =>
        setPieData({
          data: {
            value: value,
            name: coin.symbol.toUpperCase(),
          },
        }),
      );
    });
  }, [selectedPortfolio.сurrentPriceOfCoins]);
  const piePortfolioChartRef = useRef(null);
  useEffect(() => {
    if (piePortfolioChartRef.current) {
      const chartInstance = echarts.init(piePortfolioChartRef.current, null, { renderer: 'svg' });

      const piePortfolioChart = {
        tooltip: {
          trigger: 'item',
          borderColor: 'transparent',
          textStyle: { fontWeight: 'bold' },
          formatter: function (params) {
            return `<span style="letter-spacing: 1px;">${params.data.name}</span>`;
          },
        },
        legend: {
          orient: 'vertical',
          right: 'right',
          top: 'center',
          icon: 'circle',
          itemWidth: 25,
          itemHeight: 15,
          textStyle: { fontWeight: 'bold', fontSize: 13, lineHeight: 20 },
          selectedMode: false,
          formatter: function (name) {
            let seriesData = piePortfolioChart.series[0].data;
            let value = seriesData.find((item) => item.name === name).value;
            if (String(value).length === 4) {
              return `${name}       ${value}%`;
            } else {
              return `${name}     ${value}%`;
            }
          },
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['70%', '58%'],
            label: false,
            labelLine: { show: false },
            emphasis: { disabled: true },
            top: 20,
            right: 130,
            data: [
              { value: 89.95, name: 'BTC' },
              { value: 5.78, name: 'ETH' },
              { value: 4.28, name: 'SOL' },
            ],
          },
        ],
      };

      // Встановлюємо опції на інстанцію графіку
      chartInstance.setOption(piePortfolioChart);

      // Додаємо очистку інстанції графіка при демонтажі
      return () => {
        chartInstance.dispose();
      };
    }
  }, []);

  const dateListPerormanca = [
    '2024-09-17',
    '2024-09-18',
    '2024-09-19',
    '2024-09-20',
    '2024-09-21',
    '2024-09-22',
    '2024-09-23',
  ];
  const performanceLineChart = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        const date = new Date(params[0].axisValue); // Отримання дати
        return `
      <div style="padding: 10px;">
        <b>${date.toDateString()}</b> ${date.toTimeString().slice(0, 8)} UTC+2<br/>
        <span style="color: ${
          params[0].color
        }; font-weight: bold; font-size: 26px; vertical-align: middle;">●</span> 
        <span style="vertical-align: middle;">All-time profit: $87,093.78,</span>
        <span style="color: green;">▲535.69%</span><br/>
        <span style="color: ${
          params[1].color
        }; font-weight: bold; font-size: 26px; vertical-align: middle;">●</span> 
        <span style="vertical-align: middle;">BTC trend:</span>
        <span style="color: green;">▲763.81%</span>
      </div>
    `;
      },
    },
    legend: {
      left: 'left',
      icon: 'circle',

      data: ['All-time profit', 'BTC trend'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false, // Сховати короткі риски на осі X
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#E3E8F2', // Колір лінії осі X
        },
      },
      data: dateListPerormanca, // Передаємо оригінальні дати
      axisLabel: {
        formatter: function (value) {
          let date = new Date(value);
          let day = date.getDate();
          let month = date.toLocaleString('en-US', { month: 'short' });
          return `${day} ${month}`;
        },
      },
    },
    yAxis: {
      type: 'value',
      position: 'right',
      boundaryGap: ['5%', '5%'],
      scale: true,
      axisLabel: {
        formatter: function (value) {
          return value + '%'; // Додає знак процента після значення
        },
      },
    },
    series: [
      {
        name: 'All-time profit',
        type: 'line',
        stack: 'Total',
        symbol: 'none',
        color: '#486DF7',
        data: [0.01, -0.02, 0.09, 0.01, -0.02, 0.01, 0.02],
      },
      {
        name: 'BTC trend',
        type: 'line',
        stack: 'Total',
        symbol: 'none',
        color: '#FDCF96',
        data: [0, -2.81, 3.92, 2.22, 4.55, 4.11, 7.77],
      },
    ],
  };
  return (
    <PortfolioOverview
      historyLineChart={historyLineChart}
      piePortfolioChartRef={piePortfolioChartRef}
      performanceLineChart={performanceLineChart}
      selectedPortfolio={selectedPortfolio}
    />
  );
};

export default PortfolioOverviewContainer;
