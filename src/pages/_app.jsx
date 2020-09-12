import React from "react";
import PropTypes from "prop-types";

import { AppContextProvider } from "../context";
import "../styles.css";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

App.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object,
};
