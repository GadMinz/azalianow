"use client";
import s from "../styles/Home.module.scss";
import Card from "../components/Card";
import Panel from "../components/Panel";
import { useGetProductsQuery } from "../store/product/product.api";
import { IProduct } from "../store/product/product.types";
import LoadingBlock from "../components/LoadingBlock";

const Home = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <div className={s.cards}>
          <Panel title="Всё для комфортной работы" />
          {isLoading ? (
            [...new Array(9)].map((_, i) => <LoadingBlock key={i} />)
          ) : error ? (
            <div>Ошибка получения товаров</div>
          ) : (
            data?.map((product: IProduct) => (
              <Card key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
