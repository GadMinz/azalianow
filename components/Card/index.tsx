"use client";
import { useState } from "react";
import s from "./Card.module.scss";
import Image from "next/image";
import { IProduct } from "../../store/product/product.types";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IndexProps {
  product: IProduct;
}
function declOfNum(number: number, words: string[]) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

const Index: React.FC<IndexProps> = ({ product }) => {
  const { addCartItem, removeCartItem, addFavoritesItem, removeFavoritesItem } =
    useActions();
  const { cart, favorites } = useTypedSelector((state) => state);

  const [count, setCount] = useState<number>(1);
  const { id, title, price, category, image, rating } = product;

  const isExistInCart = cart.some((p) => p.id === id);
  const isExistInFavorites = favorites.some((p) => p.id === id);

  const toggleFavorites = () => {
    if (isExistInFavorites) {
      removeFavoritesItem({ id });
      return;
    }
    addFavoritesItem(product);
  };
  return (
    <div className={s.card}>
      {(rating.count > 300) &&
      (
        <div className={s.card_hit}>
          <div className={s.card_hit_dark}></div>
          <span>Хит</span>
        </div>
      )}
      <div className={s.card_photo}>
        <Image
          width={220}
          height={220}
          src={image}
          alt="photo"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={s.card_info}>
        <div className={s.card_info_category}>{category}</div>
        <div className={s.card_info_rating}>
          <div className={s.card_info_rating_stars}>
            <div className={s.card_info_rating_stars_disable}>
              <span className={s.card_info_rating_stars_disable_item}></span>
              <span className={s.card_info_rating_stars_disable_item}></span>
              <span className={s.card_info_rating_stars_disable_item}></span>
              <span className={s.card_info_rating_stars_disable_item}></span>
              <span className={s.card_info_rating_stars_disable_item}></span>
            </div>
            <div
              className={s.card_info_rating_stars_active}
              style={{ width: `${rating.rate * 20}%` }}
            >
              <span className={s.card_info_rating_stars_active_item}></span>
              <span className={s.card_info_rating_stars_active_item}></span>
              <span className={s.card_info_rating_stars_active_item}></span>
              <span className={s.card_info_rating_stars_active_item}></span>
              <span className={s.card_info_rating_stars_active_item}></span>
            </div>
          </div>
          <div className={s.card_info_rating_count}>
            {rating.count}{" "}
            {declOfNum(rating.count, ["отзыв", "отзыва", "отзывов"])}
          </div>
        </div>
      </div>
      <div className={s.card_title}>{title}</div>
      <div className={s.card_price}>
        {Math.ceil(price * 70)} ₽ <span>/шт.</span>
      </div>
      <div className={s.card_buttons}>
        {isExistInCart ? (
          <button
            className={s.card_buttons_cart_delete}
            onClick={() => removeCartItem({ id })}
          >
            В корзине
          </button>
        ) : (
          <div className={s.card_buttons_cart}>
            <button
              className={s.card_buttons_cart_add}
              onClick={() => addCartItem({ ...product, count })}
            >
              В корзину
            </button>
            <div className={s.card_buttons_cart_count}>
              <button
                disabled={count === 1}
                onClick={() => setCount((prev) => prev - 1)}
              >
                <svg viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span>{count}</span>
              <button
                disabled={count === 99}
                onClick={() => setCount((prev) => prev + 1)}
              >
                <svg viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        )}

        <button
          className={`${s.card_buttons_favorite} ${
            isExistInFavorites ? s.active : ""
          }`}
          onClick={toggleFavorites}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
          >
            <rect width="100%" height="100%" />
            <g>
              <path
                stroke="#999999"
                d="M9.073 12.14c1.035-.885 2.19-1.904 3.191-3"
              />
              <g>
                <path
                  stroke="#999999"
                  strokeLinecap="round"
                  d="M8.796 6.14a4 4 0 1 0-8 0c0 4 6 8 8 10"
                />
                <path
                  fill="#999999"
                  d="M8.443 15.786a.5.5 0 0 0 .707.707l-.707-.707zm7.853-9.647c0 .876-.329 1.784-.895 2.708-.565.922-1.347 1.828-2.208 2.689-.86.86-1.784 1.661-2.627 2.379-.832.709-1.605 1.352-2.123 1.87l.707.708c.482-.482 1.21-1.088 2.064-1.817.845-.72 1.796-1.543 2.686-2.433.889-.89 1.732-1.858 2.354-2.874.622-1.014 1.042-2.105 1.042-3.23h-1zm-3.5-3.5a3.5 3.5 0 0 1 3.5 3.5h1a4.5 4.5 0 0 0-4.5-4.5v1zm-2.315.875a3.485 3.485 0 0 1 2.315-.875v-1c-1.14 0-2.183.426-2.976 1.125l.661.75z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;
