"use client"

import ProductList from "@/components/ProductList/ProductList";
import Header from "@/components/Sidebar/Header";
import store from "@/store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Header/>
          <ProductList/>
        </QueryClientProvider>
      </Provider>
    </>
  );
}
