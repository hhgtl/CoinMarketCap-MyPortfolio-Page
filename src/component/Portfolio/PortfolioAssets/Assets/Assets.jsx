import React from 'react';
import style from './Assets.module.scss';

const Assets = ({ portfolioAssets }) => {
  const h1 = 0.01;
  const h24 = 0.05;
  const d7 = -0.09;
  const profitLoss = { profit: -0.005, percents: 0.07 };
  return (
    <div className={style.assets__container}>
      <div className={style.portfolioStats}>
        <table>
          <thead>
            <tr>
              <th className={style.statsTopContainer} style={{ justifyContent: 'flex-start' }}>
                <p>Name</p>
              </th>
              <th className={style.statsTopContainer}>
                <span>Price</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>1h%</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>24h%</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>7d%</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>Holdings</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>Avg. Buy Price</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>Profit/Loss</span>
              </th>
              <th className={style.statsTopContainer}>
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolioAssets.coin.map((p) => (
              <tr key={p.id}>
                <th className={style.statsBottomContainer} style={{ justifyContent: 'flex-start' }}>
                  <img className={style.coinLogo} src={p.image} alt={p.name} />
                  <span className={style.coinName}>{p.name}</span>
                  <span className={style.coinSymbol}>{p.symbol}</span>
                </th>
                <th className={style.statsBottomContainer}>
                  <span className={style.statistics}>
                    $
                    {JSON.stringify(portfolioAssets.сurrentPriceOfCoins[p.id]) !== undefined &&
                      portfolioAssets.сurrentPriceOfCoins[p.id].usd}
                  </span>
                </th>
                <th className={style.statsBottomContainer}>
                  <span
                    className={style.statistics}
                    style={h1 >= 0 ? { color: '#16c784' } : { color: '#ea3943' }}
                  >
                    {h1}%
                  </span>
                </th>
                <th className={style.statsBottomContainer}>
                  <span
                    className={style.statistics}
                    style={h24 >= 0 ? { color: '#16c784' } : { color: '#ea3943' }}
                  >
                    {h24}%
                  </span>
                </th>
                <th className={style.statsBottomContainer}>
                  <span
                    className={style.statistics}
                    style={d7 >= 0 ? { color: '#16c784' } : { color: '#ea3943' }}
                  >
                    {d7}%
                  </span>
                </th>
                <th className={style.statsBottomContainer}>
                  <div>
                    <span className={style.statistics}>
                      $
                      {Math.ceil(
                        JSON.stringify(portfolioAssets.сurrentPriceOfCoins[p.id]) !== undefined &&
                          portfolioAssets.сurrentPriceOfCoins[p.id].usd * p.quantity,
                      )}
                    </span>
                    <span style={{ fontSize: '12px', color: '#58667E', lineHeight: '1.5' }}>
                      {p.quantity} {p.symbol.toUpperCase()}
                    </span>
                  </div>
                </th>
                <th className={style.statsBottomContainer}>
                  <span className={style.statistics}>${Math.round(p.avgPrice)}</span>
                </th>
                <th className={style.statsBottomContainer}>
                  <div className="">
                    <span
                      className={style.statistics}
                      style={profitLoss.profit >= 0 ? { color: '#16c784' } : { color: '#ea3943' }}
                    >
                      {profitLoss.profit < 0
                        ? `-$${String(profitLoss.profit).slice(1)}`
                        : profitLoss.profit}
                    </span>
                    <span
                      style={profitLoss.profit >= 0 ? { color: '#16c784' } : { color: '#ea3943' }}
                    >
                      {profitLoss.percents}%
                    </span>
                  </div>
                </th>
                <th className={style.statsBottomContainer}>
                  <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                    className={style.actionBtnContainer}
                  >
                    <button className={style.actionBtnPlus}>+</button>
                    <button className={style.actionBtnElipsis}>...</button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assets;
