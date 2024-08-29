import { type AppType } from "next/app";
import "~/styles.css";
import React from "react";
import {api} from "../utils/api"


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);