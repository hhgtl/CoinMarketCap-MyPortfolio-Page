import StartPage from './component/StartPage/StartPage';
import style from './App.module.scss';
import Portfolio from './component/Portfolio/Portfolio';
import SidePanelContainer from './component/SidePanel/SidePanelContainer';
import { useSelector } from 'react-redux';
import ModalCreatePortfolioContainer from './component/ModalCreatePortfolio/ModalCreatePortfolioContainer';

function App() {
  const modalCPIsVileble = useSelector((state) => state.modal.modalCreatePortfolioIsVisible);
  return (
    <div className={style.app__wrapper}>
      {modalCPIsVileble ? <ModalCreatePortfolioContainer /> : null}
      {/* <StartPage /> */}
      <div className={style.container}>
        <div className={style.portfolio__container}>
          <SidePanelContainer />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
