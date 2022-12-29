import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./product.types";

export const productApi = createApi({
  reducerPath: "api/product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], number | void>({
      query: (limit) => `products?limit=${limit ? limit : ""}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
