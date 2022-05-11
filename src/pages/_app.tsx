import React from "react";
import { AppProps } from "next/app";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}
