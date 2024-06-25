import StartPage from './component/StartPage/StartPage';
import style from './App.module.scss';
import SidePanel from './component/SidePanel/SidePanel';
import Portfolio from './component/Portfolio/Portfolio';

function App() {
  return (
    <div className={style.app__wrapper}>
      {/* <StartPage /> */}
      <div className={style.container}>
        <div className={style.portfolio__container}>
          <SidePanel />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
