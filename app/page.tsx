import s from "../styles/Home.module.scss";
import Card from "../components/Card";


const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <div className={s.cards}>
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
