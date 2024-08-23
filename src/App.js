import StartPage from './component/StartPage/StartPage';
import style from './App.module.scss';
import Portfolio from './component/Portfolio/Portfolio';
import SidePanelContainer from './component/SidePanel/SidePanelContainer';
import { useSelector } from 'react-redux';
import ModalCreatePortfolioContainer from './component/ModalCreatePortfolio/ModalCreatePortfolioContainer';
import PortfolioContainer from './component/Portfolio/PortfolioContainer';

function App() {
  const modalIsVisible = useSelector((state) => state.modal.modalIsVisible);
  return (
    <div className={style.app__wrapper}>
      {modalIsVisible ? <ModalCreatePortfolioContainer /> : null}
      {/* <StartPage /> */}
      <div className={style.container}>
        <div className={style.portfolio__container}>
          <SidePanelContainer />
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
