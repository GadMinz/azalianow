import s from "../styles/Home.module.scss";
import Card from "../components/Card";
import Panel from "../components/Panel";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <div className={s.cards}>
          <Panel title="Всё для комфортной работы" />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
