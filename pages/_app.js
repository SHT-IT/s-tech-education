/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "../layout/layout";
import { ToastContainer } from "react-toastify";

import { memo, useEffect, useState } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";

// 🔥 Scroll To Top
import ScrollToTop from "../components/ScrollToTop";

const Loader = dynamic(() => import("../components/loader"), { ssr: false });

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  const AppLoadingOverlay = () =>
    isLoading ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <Loader />
      </div>
    ) : null;

  const AppComponent = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  const MemoizedAppComponent = memo(AppComponent);

  return (
    <>
      {/* 🔔 Toasts */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* 🌍 Main App */}
      <MemoizedAppComponent {...pageProps} />

      {/* ⏳ Page Loader */}
      <AppLoadingOverlay />

      {/* 🔝 Scroll To Top Arrow */}
      <ScrollToTop />
    </>
  );
}

export default MyApp;
