import React from 'react';
import style from './PortfolioOverview.module.scss';

import ReactEcharts from 'echarts-for-react';
const PortfolioOverview = ({
  historyLineChart,
  piePortfolioChartRef,
  performanceLineChart,
  selectedPortfolio,
}) => {
  return (
    <div className={style.PortfolioOverview}>
      <div className={style.financialStatistics}>
        <div className={style.card}>
          <div className={style.title}>All-time profit </div>
          <div className={`${style.sum} + ${style.positiveProfit}`}>+$3,342,28</div>
          <div className={`${style.profit} + ${style.positiveProfit}`}>3.80%</div>
        </div>
        <div className={style.card}>
          <div className={style.title}>Cost Basis</div>
          <div className={style.sum}>${selectedPortfolio.costBasis}</div>
        </div>
        <div className={style.card}>
          <div className={style.title}>Best Performer</div>
          <div className={style.coin}>BTC</div>
          <div className={`${style.profit} + ${style.positiveProfit}`}>+$2,342.28 3.80%</div>
        </div>
        <div className={style.card}>
          <div className={style.title}>Worst Performer</div>
          <div className={style.coin}>BTC</div>
          <div className={`${style.profit} + ${style.positiveProfit}`}>+$2,342.28 3.80%</div>
        </div>
      </div>
      <div className={style.charts__wrapper}>
        <div className={style.chartStatistics}>
          <div className={style.title__wrapper}>
            <div className={style.title}>History &</div>
          </div>
          {<ReactEcharts className={style.chartHistory} option={historyLineChart} />}
        </div>
        <div className={style.chartStatistics}>
          <div className={style.performance__title}>Performance (cumulative)</div>
          <ReactEcharts
            className={style.performanceLineChart__wrapper}
            option={performanceLineChart}
          />
        </div>
        <div className={style.chartPiePortfolio__container}>
          <p>Allocation</p>
          <div className={style.chartPiePortfolio} ref={piePortfolioChartRef}></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
