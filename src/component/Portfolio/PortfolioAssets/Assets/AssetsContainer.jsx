import React, { useEffect } from 'react';
import Assets from './Assets';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCurrentPriceOfCoins, updateTotalBalance } from '../../../../redux/portfolioSlice';

const AssetsContainer = () => {
  const portfolioAssets = useSelector((state) => state.portfolioData.portfolio);
  const dispatch = useDispatch();
  let selectedPortfolio;
  portfolioAssets.forEach((p) => {
    if (p.selectedPortfolio) {
      selectedPortfolio = { ...p };
    }
  });

  useEffect(() => {
    const fetchCoinPrices = async () => {
      const newCoinPrice = {};
      for (const coin of portfolioAssets[0].coin) {
        const coinId = coin.id;
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`,
        );
        newCoinPrice[coinId] = response.data[coinId];
      }
      dispatch(setCurrentPriceOfCoins({ newCoinPrice }));
      dispatch(updateTotalBalance());
    };
    fetchCoinPrices();
  }, [portfolioAssets[0].coin]);

  return <Assets portfolioAssets={selectedPortfolio} />;
};

export default AssetsContainer;
