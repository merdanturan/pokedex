import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app"
import { Provider } from 'react-redux';
import store from "@/stores/store";
import { useEffect } from "react";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}